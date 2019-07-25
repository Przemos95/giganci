using Microsoft.EntityFrameworkCore;
using NaukaIT.DAL.DTO;
using NaukaIT.DAL.Entities;
using NaukaIT.DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace NaukaIT.DAL.Repositories
{
    public class QuizRepository : IQuizRepository
    {
        BaseContext _baseContext;

        public QuizRepository(BaseContext baseContext)
        {
            _baseContext = baseContext;
        }

        public IQueryable<ClasificationInGameDTO> GetCurrentClasification(int quizId)
        {
            return _baseContext.ClassificationInGame
                .Join(_baseContext.Users, c => c.UserId, u => u.Id, (c, u) => new { c, u })
                .Where(s => s.c.QuizId == quizId)
                .Select(s => new ClasificationInGameDTO()
                {
                    ID = s.c.ID,
                    QuizId = quizId,
                    Score = s.c.Score,
                    GoodAnswers = s.c.GoodAnswers,
                    AllAnswers = s.c.AllAnswers,
                    Username = s.u.Login
                });
        }

        public DateTime CheckStartTime(int quizId)
        {
            return _baseContext.Quiz.Single(s => s.ID == quizId).StartDate;
        }

        public IQueryable<Question> GetQuestions(int quizId)
        {
            return _baseContext.Questions.Where(s => s.QuizId == quizId);
        }

        public Quiz GetQuizById(int id)
        {
            return _baseContext.Quiz.Include(s => s.ClassGroup).FirstOrDefault(s => s.ID == id);
        }

        public IQueryable<Quiz> GetQuizzesForGroup(int groupId)
        {
            return _baseContext.Quiz
                .Include(s => s.ClassificationInGame)
                .Where(s => s.ClassGroupId == groupId);
        }

        public int Answer(int questionId, char answer, int seconds, string answers, int userId)
        {
            var question = _baseContext.Questions.First(s => s.ID == questionId);
            var isCorrect = question.Correct == answer;

            var clasification = _baseContext.ClassificationInGame.FirstOrDefault(s => s.QuizId == question.QuizId && s.UserId == userId);
            if (clasification == null)
            {
                clasification = new ClassificationInGame()
                {
                    QuizId = question.QuizId,
                    UserId = userId,
                    Score = isCorrect ? 100 - seconds : 0,
                    GoodAnswers = isCorrect ? 1 : 0,
                    AllAnswers = 1
                };
                _baseContext.ClassificationInGame.Add(clasification);
            }
            else
            {
                if (isCorrect)
                {
                    clasification.Score += 100 - seconds;
                    clasification.GoodAnswers++;
                }
                clasification.AllAnswers++;
            }

            var questionCount = _baseContext.Questions.Count(s => s.QuizId == question.QuizId);
            if (questionCount == clasification.AllAnswers)
            {
                _baseContext.UserQuizResults.Add(new UserQuizResult()
                {
                    QuizId = question.QuizId,
                    UserId = userId,
                    Score = clasification.Score,
                    Answers = answers
                });
            }

            _baseContext.SaveChanges();
            return question.QuizId;
        }
    }
}
