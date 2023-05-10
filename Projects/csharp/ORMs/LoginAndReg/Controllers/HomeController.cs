using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using LoginAndReg.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Filters;
namespace LoginAndReg.Controllers;

public class HomeController : Controller
{
  private readonly ILogger<HomeController> _logger;
  private MyContext _context;
  public HomeController(ILogger<HomeController> logger, MyContext context)
  {
    _logger = logger;
    _context = context;
  }

  [HttpGet("")]
  public IActionResult Index()
  {
    return View("Index");
  }

  [HttpPost("users/create")]
  public IActionResult CreateUser(User newUser)
  {
    if (ModelState.IsValid)
    {
      PasswordHasher<User> Hasher = new PasswordHasher<User>();
      newUser.Password = Hasher.HashPassword(newUser, newUser.Password);
      _context.Add(newUser);
      _context.SaveChanges();
      HttpContext.Session.SetInt32("UserId", newUser.UserId);
    //   HttpContext.Session.SetString("FirstName", newUser.FirstName);
      return RedirectToAction("Success");
    }
    else
    {
      return View("Index");
    }
  }

  [HttpGet("users/login")]
  public IActionResult Login(LoginUser userSubmission)
  {
    if (ModelState.IsValid)
    {
      User? userInDb = _context.Users.FirstOrDefault(u => u.Email == userSubmission.Email);
      if (userInDb == null)
      {
        ModelState.AddModelError("Email", "Invalid Email/Password");
        return View("Index");
      }
      PasswordHasher<LoginUser> hasher = new PasswordHasher<LoginUser>();
      var result = hasher.VerifyHashedPassword(userSubmission, userInDb.Password, userSubmission.Password);
      if (result == 0)
      {
        ModelState.AddModelError("Email", "Invalid Email/Password");
        return View("Index");
      }
      HttpContext.Session.SetInt32("UserId", userInDb.UserId);
      return RedirectToAction("Success");
    }
    else
    {
      return View("Index");
    }
  }

  [SessionCheck]
  [HttpGet("success")]
  public IActionResult Success()
  {
    return View();
  }

  [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
  public IActionResult Error()
  {
    return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
  }

  [HttpPost("logout")]
  public IActionResult Logout()
  {
    HttpContext.Session.Clear();
    return RedirectToAction("Index");
  }

  public class SessionCheckAttribute : ActionFilterAttribute
  {
    public override void OnActionExecuting(ActionExecutingContext context)
    {
      int? userId = context.HttpContext.Session.GetInt32("UserId");
      if (userId == null)
      {
        context.Result = new RedirectToActionResult("Index", "Home", null);
      }
    }
  }
}