using System;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NaukaIT.Code.Const;
using NaukaIT.DAL.Interfaces;

namespace NaukaIT.Controllers
{
    [Authorize]
    [Route("api/file")]
    [ApiController]
    public class FileController : Controller
    {
        IFileRepository _fileRepository;
        IHostingEnvironment _hostingEnvironment;
        ILogger _logger;

        private const string ExportFileType = "attachment";
        private string _rootPath;

        public FileController(IFileRepository fileRepo, IHostingEnvironment hosting, ILogger<FileController> logger)
        {
            _fileRepository = fileRepo;
            _hostingEnvironment = hosting;
            _rootPath = _hostingEnvironment.ContentRootPath;
            _logger = logger;
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
                _logger.LogError("File_Get error: " + ex.Message);
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
                _logger.LogError("File_GetGroup error: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, SerwerConsts.DEFAULT_ERROR_MESSAGE);
            }
        }
    }
}