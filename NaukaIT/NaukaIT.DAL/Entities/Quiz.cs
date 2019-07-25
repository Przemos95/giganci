using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace NaukaIT.DAL.Entities
{
    public class Quiz
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public int ClassGroupId { get; set; }
        public string Name { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public ClassGroup ClassGroup { get; set; }
        public IEnumerable<Question> Questions { get; set; }
        public IEnumerable<ClassificationInGame> ClassificationInGame { get; set; }
        public IEnumerable<UserQuizResult> UserQuizResults { get; set; }
    }
}
