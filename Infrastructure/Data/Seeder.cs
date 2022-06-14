using Core;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Data
{
    public static class Seeder
    {
        public static void SeedData(this IApplicationBuilder app)
        {
            using (var scope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                //var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
                try
                {
                    //logger.LogInformation("Database initialization success");
                    var context = scope.ServiceProvider.GetRequiredService<JumaiysinbaDatabaseContext>();
                    context.Database.Migrate();
                    InitRolesAndUsers(scope);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    //logger.LogError("Problem seed database " + ex.Message);
                }
            }
        }

        private static void InitRolesAndUsers(IServiceScope scope)
        {
            var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<Role>>();
            var userManager = scope.ServiceProvider.GetRequiredService<UserManager<User>>();
            if (!roleManager.Roles.Any())
            {
                //var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
                var result = roleManager.CreateAsync(new Role
                {
                    Name = Roles.Admin
                }).Result;
                //if (result.Succeeded)
                //    logger.LogWarning($"Create role {Roles.Admin}");
                //else
                //    logger.LogError($"Problem crate role {Roles.Admin}");
                result = roleManager.CreateAsync(new Role
                {
                    Name = Roles.User
                }).Result;

            }
            if (!userManager.Users.Any())
            {
                var logger = scope.ServiceProvider.GetRequiredService<ILogger<RoleManager<User>>>();
                string email = "qwerty@qwe.rty";
                var user = new User
                {
                    Email = email,
                    UserName = email,
                    FirstName = "Qwerty",
                    SecondName = "Qwerty",
                    PhoneNumber = "+38(098)232 34 22",
                    Photo = "1.jpg"
                };
                var result = userManager.CreateAsync(user, "qwerty").Result;
                if (result.Succeeded)
                {
                    //logger.LogWarning("Create user " + user.UserName);
                    result = userManager.AddToRoleAsync(user, Roles.Admin).Result;
                }
                else
                {
                    //logger.LogError("Faild create user " + user.UserName);
                }
            }
        }
    }
}
