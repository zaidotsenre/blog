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
        public void Update(Series updatedArticle)
        {
            Title = updatedArticle.Title;
            Summary = updatedArticle.Summary;
        }
    }

}
