using NaukaIT.DAL.DTO;
using NaukaIT.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace NaukaIT.DAL.Interfaces
{
    public interface IQuizRepository
    {
        IQueryable<Quiz> GetQuizzesForGroup(int groupId);
        Quiz GetQuizById(int id);
        DateTime CheckStartTime(int quizId);
        IQueryable<Question> GetQuestions(int quizId);
        IQueryable<ClasificationInGameDTO> GetCurrentClasification(int quizId);
        int Answer(int questionId, char answer, int seconds, string answers, int userId);
    }
}
