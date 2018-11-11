using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NaukaIT.Code.Const;
using NaukaIT.DAL.Interfaces;

namespace NaukaIT.Controllers
{
    [Route("api/document")]
    [ApiController]
    public class DocumentController : Controller
    {
        IDocumentRepository _documentRepository;
        IHostingEnvironment _hostingEnvironment;

        private const string ExportFileType = "attachment";
        private string _rootPath;

        public DocumentController(IDocumentRepository docRepo, IHostingEnvironment hosting)
        {
            _documentRepository = docRepo;
            _hostingEnvironment = hosting;
            _rootPath = _hostingEnvironment.ContentRootPath;
        }

        [Route("get")]
        [HttpGet]
        public IActionResult Get(string group, string name)
        {
            try
            {
                var doc = _documentRepository.Get(group, name, _rootPath);

                Response.Headers["Content-Disposition"] = new ContentDispositionHeaderValue(ExportFileType) { FileName = $"{name}.docx" }.ToString();
                return Ok(doc);
            }
            catch (Exception ex)
            {
                //log ex
                return StatusCode(StatusCodes.Status500InternalServerError, SerwerConsts.DEFAULT_ERROR_MESSAGE);
            }
        }

        [Route("getGroup")]
        [HttpGet]
        public IActionResult GetGroup(string group)
        {
            try
            {
                var docs = _documentRepository.GetAll(group, _rootPath);
                return StatusCode(StatusCodes.Status200OK, docs);
            }
            catch (Exception ex)
            {
                //log ex
                return StatusCode(StatusCodes.Status500InternalServerError, SerwerConsts.DEFAULT_ERROR_MESSAGE);
            }
        }
    }
}