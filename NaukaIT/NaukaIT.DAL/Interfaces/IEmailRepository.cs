using NaukaIT.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace NaukaIT.DAL.Interfaces
{
    public interface IEmailRepository
    {
        void SaveEmail(Email email);
    }
}
