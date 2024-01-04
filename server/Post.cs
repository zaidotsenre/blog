using Microsoft.EntityFrameworkCore;

namespace Blog.Models
{
    public class Post
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Body { get; set; }
    }

    class PostDb : DbContext
    {
        public PostDb(DbContextOptions options) : base(options) { }
        public DbSet<Post> Posts { get; set; } = null!;
    }
}
