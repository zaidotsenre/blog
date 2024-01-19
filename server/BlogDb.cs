using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Blog.Models
{
    class BlogDb : IdentityDbContext<IdentityUser>
    {

        public BlogDb(DbContextOptions<BlogDb> options) : base(options) { }
        public DbSet<Article> Articles { get; set; } = null!;
        public DbSet<Series> SeriesSet { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Article>().Property(b => b.Date).HasDefaultValue(DateTime.Now);
        }
    }
}