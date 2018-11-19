using AutoMapper;
using NaukaIT.DAL.DTO;
using NaukaIT.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NaukaIT.Infrastructure
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Article, ArticleDTO>();
            CreateMap<ArticleDTO, Article>();

            CreateMap<Email, EmailDTO>();
            CreateMap<EmailDTO, Email>();

            CreateMap<User, UserDTO>();
            CreateMap<UserDTO, User>();
        }
    }
}
