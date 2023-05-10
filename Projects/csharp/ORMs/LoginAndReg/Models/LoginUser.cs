#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace LoginAndReg.Models;

public class LoginUser
{
    [Required(ErrorMessage = "Email is required.")]  
    public string LoginEmail { get; set; }    
    [Required(ErrorMessage = "Password is required.")]
    public string LoginPassword { get; set; } 
}