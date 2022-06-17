using Core.Interfaces.Services;
using Core.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Jumaiysinba.Inits
{
    public static class InitService
    {
        public static IServiceCollection UseServices(this IServiceCollection builder)
        {
            builder.AddScoped<ITokenService, TokenService>();
            builder.AddScoped<IAuthService, AuthService>();

            return builder;
        }
    }
}
