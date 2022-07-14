using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;

namespace Jumaiysinba.Inits
{
    public static class InitSwaggerSettings
    {
        public static IServiceCollection UseSwaggerGen(this IServiceCollection services)
        {
            var assemblyName = Assembly.GetExecutingAssembly().GetName().Name;
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = assemblyName, Version = "v1" });
                c.AddSecurityDefinition("Bearer",
                    new OpenApiSecurityScheme
                    {
                        Description = "JWT Authorization header using the Bearer scheme.",
                        Type = SecuritySchemeType.Http,
                        Scheme = "bearer"
                    });
                c.AddSecurityRequirement(new OpenApiSecurityRequirement{
                    {
                        new OpenApiSecurityScheme{
                            Reference = new OpenApiReference{
                                Id = "Bearer",
                                Type = ReferenceType.SecurityScheme
                            }
                        },new List<string>()
                    }
                });
                var fileDoc = Path.Combine(AppContext.BaseDirectory, $"{assemblyName}.xml");
                c.IncludeXmlComments(fileDoc);

                // include view models comments
                string nameClassLib = "Core";
                fileDoc = Path.Combine(AppContext.BaseDirectory, $"{nameClassLib}.xml");
                c.IncludeXmlComments(fileDoc);
            });

            return services;
        }
    }
}
