using NaukaIT.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace NaukaIT.DAL.Interfaces
{
    public interface IArticleRepository
    {
        Article Get(int Id);
        List<Article> GetAll();
    }
}
