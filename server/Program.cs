using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using Blog.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

// App configuration data
const string APITitle = "Blog Access API";
const int PageSize = 3;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddAuthorization();
builder.Services.AddIdentityApiEndpoints<IdentityUser>().AddEntityFrameworkStores<BlogDb>();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:3000", "http://www.localhost:3000");
        policy.AllowAnyMethod();
        policy.AllowAnyHeader();
    });
});

builder.Services.AddSqlServer<BlogDb>(builder.Configuration.GetConnectionString("BlogDb"));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = APITitle, Description = "Personal Blog", Version = "v1" });
});

var app = builder.Build();
app.MapIdentityApi<IdentityUser>();
app.UseCors();
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", APITitle);
});



/* PAGINATION HELPER FUNCTIONS*/
// Provides the index where we should start reading
int getIndex(int page, int articleListCount)
{
    int index = (page - 1) * PageSize;
    if (index < 0)
        return 0;
    if (index >= articleListCount)
        return articleListCount - (articleListCount % PageSize);
    return index;
}
// Provides the offset -number of items- we should read
int getOffset(int index, int pageSize, int articleListCount)
{
    if (index + pageSize >= articleListCount)
        return articleListCount - index;
    return pageSize;
}

// Article Routes

// Get many articles (paged)
app.MapGet("/articles/{page}", async (BlogDb db, int page) =>
{
    List<Article> articles = await db.Articles.ToListAsync();
    articles = articles.OrderByDescending(article => article.Date).ToList();
    int index = getIndex(page, articles.Count);
    int offset = getOffset(index, PageSize, articles.Count);
    return articles.GetRange(index, offset).Select((article) =>
        new
        {
            article.Id,
            article.Title,
            article.Summary,
            article.Thumbnail,
            article.Date
        });
});

// Get 1 article (by id)
app.MapGet("/article/{id}", async (BlogDb db, int id) => await db.Articles.FindAsync(id));

// Create a new article - requires auth
app.MapPost("/article", async (BlogDb db, Article article) =>
{
    await db.Articles.AddAsync(article);
    await db.SaveChangesAsync();
    return Results.Created($"/article/{article.Id}", article.Id);
}).RequireAuthorization();

// Update an existing article - requires auth
app.MapPut("/article/{id}", async (BlogDb db, Article updatedArticle, int id) =>
{
    var article = await db.Articles.FindAsync(id);
    if (article is null) return Results.NotFound();
    article.Update(updatedArticle);
    await db.SaveChangesAsync();
    return Results.NoContent();
}).RequireAuthorization();

// Delete an existing article - requires auth
app.MapDelete("article/{id}", async (BlogDb db, int id) =>
{
    var article = await db.Articles.FindAsync(id);
    if (article is null)
    {
        return Results.NotFound();
    }
    db.Articles.Remove(article);
    await db.SaveChangesAsync();
    return Results.Ok();
}).RequireAuthorization();


// Series Routes
/*
app.MapGet("/series", async (BlogDb db) => await db.SeriesSet.ToListAsync());
app.MapGet("/series/{id}", async (BlogDb db, int id) => await db.SeriesSet.FindAsync(id));
app.MapPost("/series", async (BlogDb db, Series series) =>
{
    await db.SeriesSet.AddAsync(series);
    await db.SaveChangesAsync();
    return Results.Created($"/series/{series.Id}", series);
});
app.MapPut("/series/{id}", async (BlogDb db, Series updatedSeries, int id) =>
{
    var series = await db.SeriesSet.FindAsync(id);
    if (series is null) return Results.NotFound();
    series.Update(updatedSeries);
    await db.SaveChangesAsync();
    return Results.NoContent();
});
app.MapDelete("series/{id}", async (BlogDb db, int id) =>
{
    var series = await db.SeriesSet.FindAsync(id);
    if (series is null)
    {
        return Results.NotFound();
    }
    db.SeriesSet.Remove(series);
    await db.SaveChangesAsync();
    return Results.Ok();
});
*/

app.Run();
