using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using NaukaIT.DAL.Entities;
using NaukaIT.DAL.Interfaces;
using NaukaIT.DAL.Repositories;

namespace NaukaIT
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = "JwtBearer";
                options.DefaultChallengeScheme = "JwtBearer";
            })
                .AddJwtBearer("JwtBearer", jwtBearerOptions =>
                {
                    jwtBearerOptions.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration.GetValue<string>("SecretKey"))),
                        ValidateIssuer = true,
                        ValidIssuer = Code.Const.SerwerConsts.SERVER_NAME,
                        ValidateAudience = true,
                        ValidAudience = Code.Const.SerwerConsts.CLIENT_NAME,
                        ValidateLifetime = true,
                        ClockSkew = TimeSpan.FromMinutes(5)
                    };
                });

            services.Configure<CookiePolicyOptions>(options =>
            {
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = Microsoft.AspNetCore.Http.SameSiteMode.None;
            });

            services.AddMvc();

            services.AddDbContext<BaseContext>
                (options => options.UseSqlServer(Configuration.GetConnectionString("BaseConnection")));

            services.AddScoped<IArticleRepository, ArticleRepository>();
            services.AddScoped<IClassGroupRepository, ClassGroupRepository>();
            services.AddScoped<IFileRepository, FileRepository>();
            services.AddScoped<IEmailRepository, EmailRepository>();
            services.AddScoped<IDocumentRepository, DocumentRepository>();
            services.AddScoped<IUserService, UserService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseAuthentication();
            app.UseHttpsRedirection();
            app.UseCors(builder => {
                builder
                    .AllowAnyOrigin()
                    .AllowAnyMethod()
                    .WithExposedHeaders("content-disposition")
                    .AllowAnyHeader();
            });
            app.UseMvc();
        }
    }
}
