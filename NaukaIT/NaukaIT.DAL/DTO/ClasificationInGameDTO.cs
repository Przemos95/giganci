using System;
using System.Collections.Generic;
using System.Text;

namespace NaukaIT.DAL.DTO
{
    public class ClasificationInGameDTO
    {
        public int ID { get; set; }
        public string Username { get; set; }
        public int QuizId { get; set; }
        public int Score { get; set; }
        public int GoodAnswers { get; set; }
        public int AllAnswers { get; set; }
    }
}
