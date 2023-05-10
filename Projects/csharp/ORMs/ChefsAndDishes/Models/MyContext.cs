#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
namespace ChefsAndDishes.Models;

public class MyContext : DbContext
{
public MyContext(DbContextOptions options) : base(options) { }
//table name, DbSet is not a variable name, it is a data type
public DbSet<Chef> Chefs { get; set; }
public DbSet<Dish> Dishes { get; set; }
}