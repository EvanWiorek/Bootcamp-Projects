#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ChefsAndDishes.Models;

public class Dish
{
  [Key]
  public int DishId { get;set; }
  [Required]
  public string DishName { get;set; }
  [Required]
  [GreaterThanZero]
  public int Calories { get;set; }
  [Required]
  [Tastiness]
  public int Tastiness { get;set; }
  public DateTime CreatedAt { get; set; } = DateTime.Now;
  public DateTime UpdatedAt { get; set; } = DateTime.Now;
  public int ChefId { get;set; }
  public Chef? Creator { get;set; }
}