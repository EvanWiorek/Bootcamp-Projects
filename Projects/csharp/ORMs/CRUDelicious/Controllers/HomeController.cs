using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using CRUDelicious.Models;
namespace CRUDelicious.Controllers;

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
  public IActionResult ToHome()
  {
    return RedirectToAction("Index");
  }

  [HttpGet("dishes")]
  public IActionResult Index()
  {
    // List<Dish> AllDishes = _context.Dishes.ToList();
    ViewBag.AllDishes = _context.Dishes.ToList();
    return View();
  }

  [HttpGet("dishes/new")]
  public IActionResult AddDishForm()
  {
    return View();
  }

  [HttpPost("dishes/create")]
  public IActionResult AddDish(Dish dish)
  {
    if (ModelState.IsValid)
    {
      _context.Add(dish);
      _context.SaveChanges();
      return RedirectToAction("Index");
    }
    else return View("AddDishForm");
  }

  [HttpGet("dishes/{id}")]
  public IActionResult ShowDish(int Id)
  {
    Dish? OneDish = _context.Dishes.FirstOrDefault(dish => dish.DishId == Id);
    return View(OneDish);
  }

  [HttpGet("dishes/{id}/edit")]
  public IActionResult EditDishForm(int Id)
  {
    Dish? oldDish = _context.Dishes.FirstOrDefault(dish => dish.DishId == Id);
    return View(oldDish);
  }

  [HttpPost("dishes/{id}/update")]
  public IActionResult UpdateDish(Dish newDish, int Id)
  {
    Dish? oldDish = _context.Dishes.FirstOrDefault(dish => dish.DishId == Id);
    if(ModelState.IsValid)
    {
        oldDish.Name = newDish.Name;
        oldDish.Chef = newDish.Chef;
        oldDish.Tastiness = newDish.Tastiness;
        oldDish.Calories = newDish.Calories;
        oldDish.Description = newDish.Description;
        oldDish.UpdatedAt = DateTime.Now;
        _context.SaveChanges();
        return RedirectToAction("Index");
    }
    else
    {
        return View("EditDishForm", oldDish);
    }
  }

  [HttpPost("dishes/{id}/destroy")]
  public IActionResult DestroyDish(int Id)
  {
    Dish? DishToDelete = _context.Dishes.SingleOrDefault(dish => dish.DishId == Id);
    _context.Dishes.Remove(DishToDelete);
    _context.SaveChanges();
    return RedirectToAction("Index");
  }

  [HttpGet("{**path}")]
  public RedirectResult CatchAll()
  {
    Console.WriteLine("This page doesn't exist");
    return Redirect("/");
  }

  [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
  public IActionResult Error()
  {
    return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
  }
}