using Microsoft.AspNetCore.Mvc;
namespace Countdown.Controllers;

public class CountdownController : Controller
{
  [HttpGet("")]
  public ViewResult Index()
  {
    DateTime endTime = new DateTime(2023, 05, 05);
    // DateTime endTime = DateTime.Now;
    ViewBag.EndTime = endTime;
     return View();
  }
}