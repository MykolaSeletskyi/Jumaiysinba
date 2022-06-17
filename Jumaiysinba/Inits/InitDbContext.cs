using Core.Entities.Identity;
using Infrastructure.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Jumaiysinba.Inits
{
    public static class InitDbContext
    {
        public static IServiceCollection UseDatabaseContext(this IServiceCollection builder, IConfiguration configuration)
        {
            builder.AddDbContext<JumaiysinbaDatabaseContext>(options =>
                options.UseNpgsql(configuration.GetConnectionString("DefaultConnection")));

            builder.AddIdentity<User, Role>(options =>
            {
                options.Password.RequireDigit = false;
                options.Password.RequiredLength = 5;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.Password.RequireLowercase = false;
            }).AddEntityFrameworkStores<JumaiysinbaDatabaseContext>().AddDefaultTokenProviders();
            return builder;
        }
    }
}
