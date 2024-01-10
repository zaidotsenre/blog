using Microsoft.EntityFrameworkCore;

namespace Blog.Models
{
    public class Article
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Body { get; set; }
        public byte[]? Thumbnail { get; set; }
        public DateTime Date { get; set; }
        public int SeriesID { get; set; }
        public string? Summary { get; set; }
        public int SeriesOrder { get; set; }


        // Update method
        // To be used instead of properties to better support future changes to this model
        // Takes a Article object as input
        public void Update(Article updatedArticle)
        {
            Title = updatedArticle.Title;
            Body = updatedArticle.Body;
            Thumbnail = updatedArticle.Thumbnail;
            SeriesID = updatedArticle.SeriesID;
            Summary = updatedArticle.Summary;
            SeriesOrder = updatedArticle.SeriesOrder;
        }
    }

    class ArticleDb : DbContext
    {
        public ArticleDb(DbContextOptions<ArticleDb> options) : base(options) { }
        public DbSet<Article> Articles { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Article>().Property(b => b.Date).HasDefaultValue(DateTime.Now);
        }
    }
}
