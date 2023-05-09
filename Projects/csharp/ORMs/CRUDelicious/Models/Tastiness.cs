
using System.ComponentModel.DataAnnotations;

public class TastinessAttribute : ValidationAttribute
{
  protected override ValidationResult? IsValid(object value, ValidationContext validationContext)
  {
    if ((int)value < 1 && (int)value > 5)
    {
      return new ValidationResult("Tastiness must be between 1 and 5.");
    }
    else
    {
      return ValidationResult.Success;
    }
  }
}