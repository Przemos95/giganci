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

            CreateMap<Quiz, QuizDTO>();
            CreateMap<QuizDTO, Quiz>();

            CreateMap<List<Quiz>, List<QuizDTO>>()
                .ConstructUsing((q, qdto) =>
                {
                    var quizzesDto = new List<QuizDTO>();

                    foreach (var qi in q)
                    {
                        quizzesDto.Add(new QuizDTO()
                        {
                            ID = qi.ID,
                            Name = qi.Name,
                            StartDate = qi.StartDate,
                            EndDate = qi.EndDate,
                            IsBlocked = qi.EndDate < DateTime.Now
                        });
                    }
                    return quizzesDto;
                });

            CreateMap<Question, QuestionDTO>();
            CreateMap<QuestionDTO, Question>();

            CreateMap<UserQuizResult, UserQuizResultDTO>();
            CreateMap<UserQuizResultDTO, UserQuizResult>();
        }
    }
}
