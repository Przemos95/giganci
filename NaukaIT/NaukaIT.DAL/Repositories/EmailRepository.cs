using NaukaIT.DAL.Entities;
using NaukaIT.DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace NaukaIT.DAL.Repositories
{
    public class EmailRepository : IEmailRepository
    {
        BaseContext _context;

        public EmailRepository(BaseContext context)
        {
            _context = context;
        }

        public void SaveEmail(Email email)
        {
            _context.Emails.Add(email);
            _context.SaveChanges();
        }
    }
}
