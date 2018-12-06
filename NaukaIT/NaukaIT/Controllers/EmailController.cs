using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NaukaIT.Code.Const;
using NaukaIT.DAL.DTO;
using NaukaIT.DAL.Entities;
using NaukaIT.DAL.Interfaces;

namespace NaukaIT.Controllers
{
    [Route("api/email")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        IEmailRepository _emailRepository;
        IMapper _mapper;
        ILogger _logger;

        public EmailController(IEmailRepository emailR, IMapper mapper, ILogger<EmailController> logger)
        {
            _emailRepository = emailR;
            _mapper = mapper;
            _logger = logger;
        }

        [HttpPost]
        [Route("save")]
        public IActionResult Save([FromBody]EmailDTO email)
        {
            try
            {
                var emailDb = _mapper.Map<EmailDTO, Email>(email);
                _emailRepository.SaveEmail(emailDb);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError("Email_Save error: " + ex.Message);
                return StatusCode(500, new { Error = "ServerError", Description = SerwerConsts.DEFAULT_ERROR_MESSAGE });
            }
        }
    }
}