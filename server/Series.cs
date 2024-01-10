using System.Buffers.Text;
using System.Reflection.Metadata.Ecma335;
using Microsoft.EntityFrameworkCore;

namespace Blog.Models
{
    public class Series
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Summary { get; set; }


        // Update method
        // To be used instead of properties to better support future changes to this model
        // Takes a Article object as input
        public void Update(Series updatedArticle)
        {
            Title = updatedArticle.Title;
            Summary = updatedArticle.Summary;
        }
    }

    class SeriesDb : DbContext
    {
        public SeriesDb(DbContextOptions<SeriesDb> options) : base(options) { }
        public DbSet<Series> SeriesSet { get; set; } = null!;

    }
}
