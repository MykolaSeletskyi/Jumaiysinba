using Core.Settings;
using Core.Validators;
using FluentValidation.AspNetCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace Jumaiysinba.Inits
{
    public static class InitOneLine
    {
        public static IServiceCollection UseUsefulNuGets(this IServiceCollection services, IConfiguration configuration)
        {
            // Add AutoMapper
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            // Add FluentValidation
            services.AddFluentValidation(x => x.RegisterValidatorsFromAssemblyContaining<LoginValidator>());

            // Add Google OAuth2.0 ClientId
            services.AddSingleton(
                configuration.GetSection("GoogleAuthSettings")
                .Get<GoogleAuthSettings>());

            return services;
        }
    }
}
