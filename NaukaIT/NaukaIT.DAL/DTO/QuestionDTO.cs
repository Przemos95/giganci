using System;
using System.Collections.Generic;
using System.Text;

namespace NaukaIT.DAL.DTO
{
    public class QuestionDTO
    {
        public int ID { get; set; }
        public int QuizId { get; set; }
        public string Text { get; set; }
        public string AnswerA { get; set; }
        public string AnswerB { get; set; }
        public string AnswerC { get; set; }
        public string AnswerD { get; set; }
        public char Correct { get; set; }
    }
}
