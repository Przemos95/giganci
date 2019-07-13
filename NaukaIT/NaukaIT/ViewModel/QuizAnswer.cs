using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NaukaIT.ViewModel
{
    public class QuizAnswer
    {
        public int QuestionId { get; set; }
        public char Answer { get; set; }
        public int Seconds { get; set; }
        public string[] Answers { get; set; }
    }
}
