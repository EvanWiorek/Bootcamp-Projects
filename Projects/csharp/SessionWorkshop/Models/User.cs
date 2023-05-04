#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace SessionWorkshop.Models;

public class User
{
  [Required(ErrorMessage = "Your name is required to view the dashboard.")]
  public string UserName {get;set;}
}