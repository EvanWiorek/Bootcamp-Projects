
using System.ComponentModel.DataAnnotations;

public class ChefAgeAttribute : ValidationAttribute
{
  protected override ValidationResult? IsValid(object value, ValidationContext validationContext)
  {
    var today = DateTime.Today;
    var BirthDate = Convert.ToDateTime((DateTime)value);
    var age = today.Year - BirthDate.Year;
    if (age < 18)
    {
      return new ValidationResult("Chef must be at least 18 years old.");
    }
    else
    {
      return ValidationResult.Success;
    }
  }
}