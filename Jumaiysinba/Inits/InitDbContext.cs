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
        public static IServiceCollection UseDatabaseContext(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<JumaiysinbaDatabaseContext>(options =>
                options.UseNpgsql(configuration.GetConnectionString("DefaultConnection")));

            services.AddIdentity<User, Role>(options =>
            {
                options.Password.RequireDigit = false;
                options.Password.RequiredLength = 5;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.Password.RequireLowercase = false;
            }).AddEntityFrameworkStores<JumaiysinbaDatabaseContext>().AddDefaultTokenProviders();
            return services;
        }
    }
}
