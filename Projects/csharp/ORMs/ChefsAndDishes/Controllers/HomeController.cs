using System.Diagnostics;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using ChefsAndDishes.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Filters;
namespace ChefsAndDishes.Controllers;

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
    public IActionResult Chefs()    
    {     
        ViewBag.AllChefs = _context.Chefs.Include(chef => chef.AllDishes).ToList();
        return View();    
    }

    [HttpGet("chefs/new")]    
    public IActionResult AddChefForm()    
    {
        return View();    
    }

    [HttpPost("chefs/create")]    
    public IActionResult CreateChef(Chef newChef)    
    {
        if(ModelState.IsValid)
        {
            _context.Add(newChef);
            _context.SaveChanges();
            return RedirectToAction("Chefs");
        }
        return View("AddChefForm");    
    }

    [HttpGet("dishes")]    
    public IActionResult Dishes()    
    {
        ViewBag.AllDishes = _context.Dishes.Include(dish => dish.Creator).ToList();
        return View();    
    }

    [HttpGet("dishes/new")]    
    public IActionResult AddDishForm()    
    {
        ViewBag.AllChefs = _context.Chefs.Include(chef => chef.AllDishes).ToList();
        return View();    
    }

    [HttpPost("dishes/create")]    
    public IActionResult CreateDish(Dish newDish)    
    {
        if(ModelState.IsValid)
        {
            _context.Add(newDish);
            _context.SaveChanges();
            return RedirectToAction("Dishes");
        }
        return View("AddDishForm");    
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}