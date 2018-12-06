using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NaukaIT.DAL.DTO;
using NaukaIT.DAL.Entities;
using NaukaIT.DAL.Interfaces;

namespace NaukaIT.Controllers
{
    [Route("api/article")]
    [ApiController]
    public class ArticleController : Controller
    {
        IArticleRepository _articleRepository;
        IMapper _mapper;
        ILogger _logger;

        public ArticleController(IArticleRepository article, IMapper mapper, ILogger<ArticleController> logger)
        {
            _articleRepository = article;
            _mapper = mapper;
            _logger = logger;
        }

        [Route("get")]
        [HttpGet]
        public IActionResult Get(int Id)
        {
            var articles = _articleRepository.Get(Id);
            var articleResource = _mapper.Map<Article, ArticleDTO>(articles);
            return Ok(articleResource);
        }

        [Route("getAll")]
        [HttpGet]
        public IActionResult GetAll()
        {
            var articles = _articleRepository.GetAll();
            var articleResource = _mapper.Map<List<Article>, List<ArticleDTO>>(articles);
            return Ok(articleResource.OrderByDescending(s => s.Id));
        }
    }
}