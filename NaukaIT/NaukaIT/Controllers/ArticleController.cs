using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NaukaIT.DAL.Interfaces;

namespace NaukaIT.Controllers
{
    [Route("api/article")]
    [ApiController]
    public class ArticleController : Controller
    {
        IArticleRepository _articleRepository;

        public ArticleController(IArticleRepository article)
        {
            _articleRepository = article;
        }

        [Route("get")]
        [HttpGet]
        public IActionResult Get(int Id)
        {
            var articles = _articleRepository.Get(Id);
            return Ok(articles);
        }

        [Route("getAll")]
        [HttpGet]
        public IActionResult GetAll()
        {
            var articles = _articleRepository.GetAll();
            return Ok(articles);
        }
    }
}