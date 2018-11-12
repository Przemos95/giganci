using System;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NaukaIT.Code.Const;
using NaukaIT.DAL.Interfaces;

namespace NaukaIT.Controllers
{
    [Route("api/file")]
    [ApiController]
    public class FileController : Controller
    {
        IFileRepository _fileRepository;
        IHostingEnvironment _hostingEnvironment;

        private const string ExportFileType = "attachment";
        private string _rootPath;

        public FileController(IFileRepository fileRepo, IHostingEnvironment hosting)
        {
            _fileRepository = fileRepo;
            _hostingEnvironment = hosting;
            _rootPath = _hostingEnvironment.ContentRootPath;
        }

        [Route("get")]
        [HttpGet]
        public IActionResult Get(string group, string name)
        {
            try
            {
                var file = _fileRepository.Get(group, name, _rootPath);

                Response.Headers["Content-Disposition"] = new ContentDispositionHeaderValue(ExportFileType) { FileName = $"{name}.zip" }.ToString();
                return Ok(file);
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
                var docs = _fileRepository.GetAll(group, _rootPath);
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