using System.ComponentModel.DataAnnotations;

public class GreaterThanZeroAttribute : ValidationAttribute
{
  protected override ValidationResult? IsValid(object value, ValidationContext validationContext)
  {
    if ((int)value < 0)
    {
      return new ValidationResult("Calories must be greater than 0.");
    }
    else
    {
      return ValidationResult.Success;
    }
  }
}