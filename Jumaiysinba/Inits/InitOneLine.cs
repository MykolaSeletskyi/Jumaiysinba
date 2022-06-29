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


            return services;
        }
    }
}
