using System;
using System.Collections.Generic;
using System.Text;

namespace NaukaIT.DAL.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public string Salt { get; set; }
        public string Name { get; set; }
        public int Group { get; set; }
        public IEnumerable<UserQuizResult> UserQuizResults { get; set; }
    }
}
