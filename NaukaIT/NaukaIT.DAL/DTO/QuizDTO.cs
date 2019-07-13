using NaukaIT.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace NaukaIT.DAL.DTO
{
    public class QuizDTO
    {
        public int ID { get; set; }
        public GroupDTO ClassGroup { get; set; }
        public string Name { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public IEnumerable<QuestionDTO> Questions { get; set; }
        public IEnumerable<UserQuizResultDTO> UserQuizResults { get; set; }

    }
}
