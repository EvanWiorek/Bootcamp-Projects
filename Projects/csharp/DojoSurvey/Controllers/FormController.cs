using Microsoft.AspNetCore.Mvc;
namespace DojoSurvey.Controllers;

public class FormController : Controller
{
  [HttpGet("")]
  public ViewResult Index()
  {
    return View();
  }

  [HttpGet("submission")]
  public ViewResult SubmissionData(string YourName, string DojoLocation, string FavLanguage, string Comments)
  {
    ViewBag.YourName = YourName;
    ViewBag.DojoLocation = DojoLocation;
    ViewBag.FavLanguage = FavLanguage;
    ViewBag.Comments = Comments;
    return View();
  }

  [HttpPost("process")]
  public IActionResult Process(string YourName, string DojoLocation, string FavLanguage, string Comments)
  {
    Console.WriteLine($"{YourName}, {DojoLocation}, {FavLanguage}, {Comments}.");
    // Then don't forget to return some kind of result!
    return RedirectToAction("SubmissionData", new {YourName = YourName, DojoLocation = DojoLocation, FavLanguage = FavLanguage, Comments = Comments});
  }
}