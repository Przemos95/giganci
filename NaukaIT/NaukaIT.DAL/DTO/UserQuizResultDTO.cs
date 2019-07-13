using System;
using System.Collections.Generic;
using System.Text;

namespace NaukaIT.DAL.DTO
{
    public class UserQuizResultDTO
    {
        public int ID { get; set; }
        public int UserId { get; set; }
        public int QuizId { get; set; }
        public int Score { get; set; }
        public string Answers { get; set; }
    }
}
