using Microsoft.EntityFrameworkCore;

namespace admin_backend.Persistence;

public class AppDBContext: DbContext
{
  public AppDBContext(DbContextOptions<AppDBContext> options):base(options){}
}