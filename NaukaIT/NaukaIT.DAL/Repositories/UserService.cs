using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using NaukaIT.DAL.Entities;
using NaukaIT.DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace NaukaIT.DAL.Repositories
{
    public class UserService : IUserService
    {
        private BaseContext _context;
        private IConfiguration _configuration;

        public UserService(BaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public User Authenticate(string login, string password)
        {
            if (string.IsNullOrEmpty(login) || string.IsNullOrEmpty(password))
                return null;

            var user = _context.Users.FirstOrDefault(x => x.Login == login);
            
            if (user == null)
                return null;

            if (!VerifyPasswordHash(password, user.Password, user.Salt))
                return null;

            return user;
        }

        public IEnumerable<User> GetAll()
        {
            return _context.Users;
        }

        public User GetById(int id)
        {
            return _context.Users.Include(s => s.UserQuizResults).FirstOrDefault(s => s.Id == id);
        }

        private static bool VerifyPasswordHash(string password, string storedHash, string storedSalt)
        {
            if (string.IsNullOrWhiteSpace(password) || string.IsNullOrWhiteSpace(storedHash) || string.IsNullOrWhiteSpace(storedSalt))
                return false;

            return DevOne.Security.Cryptography.BCrypt.BCryptHelper.CheckPassword(password, storedHash);
        }

        private void InsertUser(string login, string password, int group, string name)
        {
            string salt = DevOne.Security.Cryptography.BCrypt.BCryptHelper.GenerateSalt();
            string pass = DevOne.Security.Cryptography.BCrypt.BCryptHelper.HashPassword(password, salt);

            _context.Users.Add(new User()
            {
                Login = login,
                Password = pass,
                Salt = salt,
                Group = group,
                Name = name
            });
            _context.SaveChanges();
        }
    }
}
