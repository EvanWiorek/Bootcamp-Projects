#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace CRUDelicious.Models;

public class Dish
{
  [Key]
  public int DishId { get;set; }
  [Required(ErrorMessage = "Dish name is required.")]
  public string Name { get;set; }
  [Required(ErrorMessage = "Chef's name is required.")]
  public string Chef { get;set; }
  [Required]
  [Tastiness]
  public int Tastiness { get;set; }
  [Required]
  [GreaterThanZero]
  public int Calories { get;set; }
  [Required(ErrorMessage = "Description is required.")]
  public string Description { get;set; }
  [Required]
  public DateTime CreatedAt { get; set; } = DateTime.Now;
  [Required]
  public DateTime UpdatedAt { get; set; } = DateTime.Now;
}