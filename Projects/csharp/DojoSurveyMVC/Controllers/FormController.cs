using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using DojoSurveryMVC.Models;

namespace DojoSurveryMVC.Controllers;

public class FormController : Controller
{
  //below allows us to pass this new instance down to be reassigned
  static Survey survey;
  private readonly ILogger<FormController> _logger;

  public FormController(ILogger<FormController> logger)
  {
      _logger = logger;
  }

  [HttpGet("")]
  public IActionResult Index()
  {
    return View();
  }

  [HttpGet("submission")]
  public IActionResult SubmissionData()
  {
    return View(survey);
  }

  //Below is on my own
  // [HttpPost("process")]
  // public IActionResult Process(string YourName, string DojoLocation, string FavLanguage, string Comments)
  // {
  //   Survey NewSurvey = new Survey()
  //   {
  //     YourName = YourName,
  //     DojoLocation = DojoLocation,
  //     FavLanguage = FavLanguage,
  //     Comments = Comments
  //   };
  //   return RedirectToAction("SubmissionData", NewSurvey);
  // }

  //Below is with further research
  [HttpPost("process")]
  public IActionResult Process(Survey NewSurvey)
  {
    survey = NewSurvey;
    return RedirectToAction("SubmissionData");
  }

  [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}