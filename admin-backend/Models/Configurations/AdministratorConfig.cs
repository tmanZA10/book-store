using admin_backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace admin_backend.Model.Configurations;

public class AdministratorConfig :IEntityTypeConfiguration<Administrator>
{

  public void Configure(EntityTypeBuilder<Administrator> builder)
  {
    builder.HasKey(a => a.Id);
    builder.Property(a => a.Id)
      .HasColumnName("id")
      .HasColumnType("varchar(12)");
    builder.Property(a => a.FirstName)
      .HasColumnName("first_name")
      .HasColumnType("varchar(100)")
      .IsRequired();
    builder.Property(a => a.MiddleName)
      .HasColumnName("middle_name")
      .HasColumnType("varchar(100)");
    builder.Property(a => a.LastName)
      .HasColumnName("last_name")
      .HasColumnType("varchar(100)")
      .IsRequired();
    builder.Property(a => a.Email)
      .HasColumnName("email")
      .HasColumnType("varchar(254)") //254 is the maximum email address length
      .IsRequired();
    builder.HasIndex(a => a.Email)
      .IsUnique();
    builder.Property(a => a.PhoneNumber)
      .HasColumnName("phone_number")
      .HasColumnType("varchar(10)")
      .IsRequired();
    builder.HasIndex(a => a.PhoneNumber)
      .IsUnique();
    builder.Property(a => a.Password).HasColumnType("longtext");
  }
}