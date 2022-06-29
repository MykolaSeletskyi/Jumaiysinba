using Core.Interfaces.Services;
using Core.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Jumaiysinba.Inits
{
    public static class InitService
    {
        public static IServiceCollection UseServices(this IServiceCollection services)
        {
            services.AddScoped<ITokenService, TokenService>();
            services.AddScoped<IAuthService, AuthService>();

            return services;
        }
    }
}
