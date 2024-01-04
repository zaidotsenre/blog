using Microsoft.EntityFrameworkCore;

namespace Blog.Models
{
    public class Post
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Body { get; set; }

        // Update method
        // To be used instead of properties to better support future changes to this model
        // Takes a Post object as input
        public void Update(Post updatedPost)
        {
            Title = updatedPost.Title;
            Body = updatedPost.Body;
        }
    }

    class PostDb : DbContext
    {
        public PostDb(DbContextOptions options) : base(options) { }
        public DbSet<Post> Posts { get; set; } = null!;
    }
}
