using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using SessionWorkshop.Models;

namespace SessionWorkshop.Controllers;

public class HomeController : Controller
{
  //because we are using Session, I do not need to create an instance of User?
  //   static User NewUser;
  private readonly ILogger<HomeController> _logger;

  public HomeController(ILogger<HomeController> logger)
  {
    _logger = logger;
  }

  public IActionResult Index()
  {
    return View();
  }

  [HttpPost("process")]
  public IActionResult Process(User NewUser)
  {
    if (ModelState.IsValid)
    {
      HttpContext.Session.SetInt32("NewNum", 22);
      HttpContext.Session.SetString("UserName", NewUser.UserName);
      return RedirectToAction("Dashboard");
    }
    else
    {
      return View("Index");
    }
  }

  //multiple routes
  //   [HttpPost("plusone")]
  //   public IActionResult PlusOne()
  //   {
  //     int? newNum = HttpContext.Session.GetInt32("NewNum");
  //     HttpContext.Session.SetInt32("NewNum", newNum.Value + 1);
  //     return RedirectToAction("Dashboard");
  //   }

  //   [HttpPost("minusone")]
  //   public IActionResult MinusOne()
  //   {
  //     int? newNum = HttpContext.Session.GetInt32("NewNum");
  //     HttpContext.Session.SetInt32("NewNum", newNum.Value - 1);
  //     return RedirectToAction("Dashboard");
  //   }

  //   [HttpPost("timestwo")]
  //   public IActionResult TimesTwo()
  //   {
  //   int? newNum = HttpContext.Session.GetInt32("NewNum");
  //   HttpContext.Session.SetInt32("NewNum", newNum.Value * 2);
  //   return RedirectToAction("Dashboard");
  //   }

  //   [HttpPost("plusrandom")]
  //   public IActionResult PlusRandom()
  //   {
  //   int? newNum = HttpContext.Session.GetInt32("NewNum");
  //   Random rand = new Random();
  //   int randomNum = rand.Next(1, 100);
  //   HttpContext.Session.SetInt32("NewNum", newNum.Value + randomNum);
  //   return RedirectToAction("Dashboard");
  //   }

  [HttpPost("changenumber")]
  public IActionResult ChangeNumber(string actionType)
  {
    Console.WriteLine(actionType);
    if (actionType == "PlusOne")
    {
      int? newNum = HttpContext.Session.GetInt32("NewNum");
      HttpContext.Session.SetInt32("NewNum", newNum.Value + 1);
      return RedirectToAction("Dashboard");
    }
    else if (actionType == "MinusOne")
    {
      int? newNum = HttpContext.Session.GetInt32("NewNum");
      HttpContext.Session.SetInt32("NewNum", newNum.Value - 1);
      return RedirectToAction("Dashboard");
    }
    else if (actionType == "timestwo")
    {
      int? newNum = HttpContext.Session.GetInt32("NewNum");
      HttpContext.Session.SetInt32("NewNum", newNum.Value * 2);
      return RedirectToAction("Dashboard");
    }
    else
    {
      int? newNum = HttpContext.Session.GetInt32("NewNum");
      Random rand = new Random();
      int randomNum = rand.Next(1, 100);
      HttpContext.Session.SetInt32("NewNum", newNum.Value + randomNum);
      return RedirectToAction("Dashboard");
    }
  }

  [HttpGet("dashboard")]
  public IActionResult Dashboard()
  {
    string NewUserName = HttpContext.Session.GetString("UserName");
    return View();
  }

  [HttpPost("logout")]
  public IActionResult ClearSession()
  {
    HttpContext.Session.Clear();
    return RedirectToAction("Index");
  }

  [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
  public IActionResult Error()
  {
    return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
  }
}
