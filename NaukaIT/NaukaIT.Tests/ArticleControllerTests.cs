using Moq;
using NaukaIT.DAL.Entities;
using NaukaIT.DAL.Interfaces;
using System;
using System.Collections.Generic;
using Xunit;
using System.Linq;
using NaukaIT.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace NaukaIT.Tests
{
    public class ArticleControllerTests
    {
        private List<Article> _articles;
        private ArticleController _articleController;
        private Mock<IArticleRepository> _articleRepository;

        public ArticleControllerTests()
        {
            _articles = Seed();
            _articleRepository = new Mock<IArticleRepository>();
            _articleRepository.Setup(x => x.Get(It.IsAny<int>()))
                .Returns((int id) => _articles.FirstOrDefault(s => s.Id == id));
            _articleRepository.Setup(x => x.GetAll()).Returns(_articles);


            _articleController = new ArticleController(_articleRepository.Object);
        }

        [Fact]
        public void GetAll_VerifyExpectedCount()
        {
            var result = (ObjectResult) _articleController.GetAll();
            var resultValue = (List<Article>)result.Value;

            Assert.Equal(4, resultValue.Count);
        }

        [Fact]
        public void Get_VerifyExisting()
        {
            var result = (ObjectResult)_articleController.Get(1);
            Assert.Equal(typeof(Article), result.Value.GetType());
            Assert.Equal("First", ((Article)result.Value).Title);

            result = (ObjectResult)_articleController.Get(3);
            Assert.Equal(typeof(Article), result.Value.GetType());
            Assert.Equal("Third", ((Article)result.Value).Title);

            result = (ObjectResult)_articleController.Get(5);
            Assert.Null(result.Value); 
        }

        private List<Article> Seed()
        {
            return new List<Article>
            {
                new Article()
                {
                    Id = 1,
                    Title = "First",
                    Shortcut = "First article"
                },
                new Article()
                {
                    Id = 2,
                    Title = "Second",
                    Shortcut = "Second article"
                },
                new Article()
                {
                    Id = 3,
                    Title = "Third",
                    Shortcut = "Third article"
                },
                new Article()
                {
                    Id = 4,
                    Title = "Fourth",
                    Shortcut = "Fourth article"
                },
            };
        }
    }
}
