#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ChefsAndDishes.Models;

public class Chef
{
  [Key]
  public int ChefId { get;set; }
  [Required]
  public string FirstName { get;set; }
  [Required]
  public string LastName { get;set; }
  [Required]
  [DataType(DataType.Date)]
  [ChefAge]
  public DateTime DOB { get;set; }
  public DateTime CreatedAt { get; set; } = DateTime.Now;
  public DateTime UpdatedAt { get; set; } = DateTime.Now;
  public List<Dish> AllDishes { get;set; } = new List<Dish>();
}