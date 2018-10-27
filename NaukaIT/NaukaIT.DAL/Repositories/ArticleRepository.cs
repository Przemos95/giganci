using NaukaIT.DAL.Entities;
using NaukaIT.DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace NaukaIT.DAL.Repositories
{
    public class ArticleRepository : IArticleRepository
    {
        BaseContext _baseContext;

        public ArticleRepository(BaseContext baseContext)
        {
            _baseContext = baseContext;
        }

        public Article Get(int Id)
        {
            return _baseContext.Articles.Find(Id);
        }

        public List<Article> GetAll()
        {
            return _baseContext.Articles.ToList();
        }
    }
}
