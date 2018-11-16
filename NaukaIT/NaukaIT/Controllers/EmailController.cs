using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NaukaIT.Code.Const;
using NaukaIT.DAL.Entities;
using NaukaIT.DAL.Interfaces;

namespace NaukaIT.Controllers
{
    [Route("api/email")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        IEmailRepository _emailRepository;

        public EmailController(IEmailRepository emailR)
        {
            _emailRepository = emailR;
        }

        [HttpPost]
        [Route("save")]
        public IActionResult Save([FromBody]Email email)
        {
            try
            {
                //todo: create emailresources and add mapping
                _emailRepository.SaveEmail(email);
                return Ok();
            }
            catch (Exception ex)
            {
                //todo: log ex
                return StatusCode(500, new { Error = "ServerError", Description = SerwerConsts.DEFAULT_ERROR_MESSAGE });
            }
        }
    }
}