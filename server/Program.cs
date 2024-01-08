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
    });
});
var connectionString = builder.Configuration.GetConnectionString("Posts") ?? "Data Source=Posts.db";
builder.Services.AddSqlite<PostDb>(connectionString);
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

// Routes
app.MapGet("/", () => "Hello World!");
app.MapGet("/posts", async (PostDb db) => await db.Posts.ToListAsync());
app.MapGet("/post/{id}", async (PostDb db, int id) => await db.Posts.FindAsync(id));
app.MapPost("/post", async (PostDb db, Post post) =>
{
    await db.Posts.AddAsync(post);
    await db.SaveChangesAsync();
    return Results.Created($"/post/{post.Id}", post);
});
app.MapPut("/post/{id}", async (PostDb db, Post updatedPost, int id) =>
{
    var post = await db.Posts.FindAsync(id);
    if (post is null) return Results.NotFound();
    post.Update(updatedPost);
    await db.SaveChangesAsync();
    return Results.NoContent();
});
app.MapDelete("post/{id}", async (PostDb db, int id) =>
{
    var post = await db.Posts.FindAsync(id);
    if (post is null)
    {
        return Results.NotFound();
    }
    db.Posts.Remove(post);
    await db.SaveChangesAsync();
    return Results.Ok();
});

app.Run();
