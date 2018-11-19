﻿using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using NaukaIT.DAL.DTO;
using NaukaIT.DAL.Entities;
using NaukaIT.DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace NaukaIT.Controllers
{
    [Route("api/User")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserService _userService;
        private IConfiguration _configuration;
        private IMapper _mapper;

        public UserController(IUserService userService, IConfiguration configuration, IMapper mapper)
        {
            _userService = userService;
            _configuration = configuration;
            _mapper = mapper;
        }

        [HttpPost]
        [Route("authenticate")]
        public IActionResult Authenticate([FromBody]UserDTO userDto)
        {
            var user = _userService.Authenticate(userDto.Login, userDto.Password);

            if (user == null)
                return new BadRequestObjectResult("Nieprawidłowy login lub hasło");

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.NameId, user.Id.ToString()),
                new Claim(JwtRegisteredClaimNames.UniqueName, user.Name)
            };

            var key = Encoding.UTF8.GetBytes(_configuration.GetValue<string>("SecretKey"));

            var token = new JwtSecurityToken(
                Code.Const.SerwerConsts.SERVER_NAME,
                Code.Const.SerwerConsts.CLIENT_NAME,
                claims,
                DateTime.Now,
                DateTime.Now.AddDays(1),
                new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256)
            );

            var tokenString = new JwtSecurityTokenHandler().WriteToken(token);

            return Ok(new
            {
                Id = user.Id,
                Login = user.Login,
                Name = user.Name,
                Group = user.Group,
                Token = tokenString
            });
        }

    }
}
