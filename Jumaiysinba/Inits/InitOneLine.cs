using Core.Validators;
using FluentValidation.AspNetCore;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace Jumaiysinba.Inits
{
    public static class InitOneLine
    {
        public static IServiceCollection UseUsefulNuGets(this IServiceCollection builder)
        {
            // Add AutoMapper
            builder.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            // Add FluentValidation
            builder.AddFluentValidation(x => x.RegisterValidatorsFromAssemblyContaining<LoginValidator>());
            
            return builder;
        }
    }
}
