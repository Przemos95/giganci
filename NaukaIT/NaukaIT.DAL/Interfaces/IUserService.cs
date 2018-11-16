using Microsoft.IdentityModel.Tokens;
using NaukaIT.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace NaukaIT.DAL.Interfaces
{
    public interface IUserService
    {
        User Authenticate(string login, string password);
        IEnumerable<User> GetAll();
        User GetById(int id);
    }
}
