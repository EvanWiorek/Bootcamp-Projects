#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace SurveyValidations.Models;
public class Survey
{
  [Required(ErrorMessage = "Name is required.")]
  [MinLength(2, ErrorMessage = "Name must be longer than 2 characters.")]
  public string YourName {get;set;}
  [Required(ErrorMessage = "Location is required.")]
  public string DojoLocation {get;set;}
  [Required(ErrorMessage = "Language is required.")]
  public string FavLanguage {get;set;}
  [MinLength(20, ErrorMessage = "Comments need to be at least 20 characters long.")]
  public string? Comments {get;set;}
}