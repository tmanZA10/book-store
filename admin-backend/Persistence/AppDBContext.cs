using System.Reflection;
using admin_backend.Models;
using Microsoft.EntityFrameworkCore;

namespace admin_backend.Persistence;

public class AppDBContext: DbContext
{

  public DbSet<Administrator> Administrators { get; set; }
  
  public AppDBContext(DbContextOptions<AppDBContext> options):base(options){}

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
  }
}