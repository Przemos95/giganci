using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NaukaIT.Code.Const;
using NaukaIT.DAL.DTO;
using NaukaIT.DAL.Entities;
using NaukaIT.DAL.Interfaces;
using NaukaIT.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NaukaIT.Controllers
{
    [Route("api/quiz")]
    [ApiController]
    public class QuizController : Controller
    {
        IQuizRepository _quizRepository;
        IUserService _userService;
        IMapper _mapper;
        ILogger _logger;

        public QuizController(IQuizRepository quizRepository, IUserService userService, IMapper mapper, ILogger<QuizController> logger)
        {
            _quizRepository = quizRepository;
            _userService = userService;
            _mapper = mapper;
            _logger = logger;
        }

        [Route("get")]
        [HttpGet]
        public IActionResult Get(int Id)
        {
            try
            {
                var quiz = _quizRepository.GetQuizById(Id);
                var quizResource = _mapper.Map<Quiz, QuizDTO>(quiz);
                return Ok(quizResource);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Quiz\\GetQuiz");
                return StatusCode(StatusCodes.Status500InternalServerError, SerwerConsts.DEFAULT_ERROR_MESSAGE);
            }
        }

        [Route("getQuizzes")]
        [HttpGet]
        public IActionResult GetQuizzes()
        {
            try
            {
                var userId = User.Claims.FirstOrDefault(s => s.Type.EndsWith(SerwerConsts.TOKEN_ID_TYPE)).Value;
                var user = _userService.GetById(int.Parse(userId));
                var quizzes = _quizRepository.GetQuizzesForGroup(user.Group).ToList();
                var quizzesResource = _mapper.Map<List<Quiz>, List<QuizDTO>>(quizzes);
                foreach (var quiz in quizzesResource)
                {
                    quiz.IsBlocked = quiz.IsBlocked || quizzes.Single(q => q.ID == quiz.ID).ClassificationInGame.Any(u => u.UserId.ToString() == userId);
                }
                return Ok(quizzesResource);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Quiz\\GetQuizzes");
                return StatusCode(StatusCodes.Status500InternalServerError, SerwerConsts.DEFAULT_ERROR_MESSAGE);
            }
        }

        [Route("checkTime")]
        [HttpGet]
        public IActionResult CheckTime(int id)
        {
            try
            {
                var startTime = _quizRepository.CheckStartTime(id);
                return Ok(startTime);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Quiz\\CheckTime");
                return StatusCode(StatusCodes.Status500InternalServerError, SerwerConsts.DEFAULT_ERROR_MESSAGE);
            }
        }

        [Route("questions")]
        [HttpGet]
        public IActionResult GetQuestions(int id)
        {
            try
            {
                var questions = _quizRepository.GetQuestions(id);
                var questionsResources = _mapper.Map<List<Question>, List<QuestionDTO>>(questions.ToList());
                return Ok(questionsResources);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Quiz\\GetQuestions");
                return StatusCode(StatusCodes.Status500InternalServerError, SerwerConsts.DEFAULT_ERROR_MESSAGE);
            }
        }

        [Route("answer")]
        [HttpPost]
        public IActionResult Answer([FromBody] QuizAnswer answer)
        {
            try
            {
                var userId = User.Claims.FirstOrDefault(s => s.Type.EndsWith(SerwerConsts.TOKEN_ID_TYPE)).Value;
                var quizId = _quizRepository.Answer(answer.QuestionId, answer.Answer, answer.Seconds, string.Join(";", answer.Answers), int.Parse(userId));
                var classification = _quizRepository.GetCurrentClasification(quizId);
                return Ok(classification);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Quiz\\answer");
                return StatusCode(StatusCodes.Status500InternalServerError, SerwerConsts.DEFAULT_ERROR_MESSAGE);
            }
        }


    }
}
