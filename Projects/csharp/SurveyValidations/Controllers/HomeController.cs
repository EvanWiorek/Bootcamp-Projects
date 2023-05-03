using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using SurveyValidations.Models;

namespace SurveyValidations.Controllers;

public class HomeController : Controller
{
  static Survey survey;
  private readonly ILogger<HomeController> _logger;

  public HomeController(ILogger<HomeController> logger)
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

  [HttpPost("process")]
  public IActionResult Process(Survey NewSurvey)
  {
    if (ModelState.IsValid)
    {
      survey = NewSurvey;
      return RedirectToAction("SubmissionData");
    }
    else
    {
      return View("Index");
    }
  }

  [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
  public IActionResult Error()
  {
    return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
  }
}
