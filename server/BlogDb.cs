using Microsoft.EntityFrameworkCore;

namespace Blog.Models
{
    class BlogDb(DbContextOptions<BlogDb> options) : DbContext(options)
    {
        public DbSet<Article> Articles { get; set; } = null!;
        public DbSet<Series> SeriesSet { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Article>().Property(b => b.Date).HasDefaultValue(DateTime.Now);
        }
    }
}