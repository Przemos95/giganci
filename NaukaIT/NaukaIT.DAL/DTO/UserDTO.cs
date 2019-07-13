using System;
using System.Collections.Generic;
using System.Text;

namespace NaukaIT.DAL.DTO
{
    public class UserDTO
    {
        public int Id { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public int Group { get; set; }
        public IEnumerable<UserQuizResultDTO> UserQuizResultDTO { get; set; }
    }
}
