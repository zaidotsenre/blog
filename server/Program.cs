using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using Blog.Models;

// App configuration data
const string APITitle = "Blog Access API";

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:3000", "http://www.localhost:3000");
        policy.AllowAnyMethod();
        policy.AllowAnyHeader();
    });
});
var connectionStringArticles = builder.Configuration.GetConnectionString("Articles") ?? "Data Source=Articles.db";
var connectionStringSeries = builder.Configuration.GetConnectionString("Series") ?? "Data Source=Series.db";
builder.Services.AddSqlite<ArticleDb>(connectionStringArticles);
builder.Services.AddSqlite<SeriesDb>(connectionStringSeries);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = APITitle, Description = "Personal Blog", Version = "v1" });
});

var app = builder.Build();
app.UseCors();
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", APITitle);
});

// Article Routes
app.MapGet("/", () => "Hello World!");
app.MapGet("/articles", async (ArticleDb db) => await db.Articles.ToListAsync());
app.MapGet("/article/{id}", async (ArticleDb db, int id) => await db.Articles.FindAsync(id));
app.MapPost("/article", async (ArticleDb db, Article article) =>
{
    await db.Articles.AddAsync(article);
    await db.SaveChangesAsync();
    return Results.Created($"/article/{article.Id}", article);
});
app.MapPut("/article/{id}", async (ArticleDb db, Article updatedArticle, int id) =>
{
    var article = await db.Articles.FindAsync(id);
    if (article is null) return Results.NotFound();
    article.Update(updatedArticle);
    await db.SaveChangesAsync();
    return Results.NoContent();
});
app.MapDelete("article/{id}", async (ArticleDb db, int id) =>
{
    var article = await db.Articles.FindAsync(id);
    if (article is null)
    {
        return Results.NotFound();
    }
    db.Articles.Remove(article);
    await db.SaveChangesAsync();
    return Results.Ok();
});


// Series Routes
app.MapGet("/series", async (SeriesDb db) => await db.SeriesSet.ToListAsync());
app.MapGet("/series/{id}", async (SeriesDb db, int id) => await db.SeriesSet.FindAsync(id));
app.MapPost("/series", async (SeriesDb db, Series series) =>
{
    await db.SeriesSet.AddAsync(series);
    await db.SaveChangesAsync();
    return Results.Created($"/series/{series.Id}", series);
});
app.MapPut("/series/{id}", async (SeriesDb db, Series updatedSeries, int id) =>
{
    var series = await db.SeriesSet.FindAsync(id);
    if (series is null) return Results.NotFound();
    series.Update(updatedSeries);
    await db.SaveChangesAsync();
    return Results.NoContent();
});
app.MapDelete("series/{id}", async (SeriesDb db, int id) =>
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


app.Run();
