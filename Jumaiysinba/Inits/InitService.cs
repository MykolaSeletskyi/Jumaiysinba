using Core.Interfaces.Service;
using Infrastructure.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Jumaiysinba.Inits
{
    public static class InitService
    {
        public static void UseServices(this IServiceCollection builder)
        {
            builder.AddScoped<ITokenService, TokenService>();
            builder.AddScoped<IAuthService, AuthService>();
        }
    }
}
