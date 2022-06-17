using Core.Interfaces.Services;
using Core.ViewModels.Auth;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Jumaiysinba.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        /// <summary>
        /// Реєстрація [Unauthorize]
        /// </summary>
        /// <param name="model">Пошта, ім'я, прізвище, фотографія (base64), номер телефону, пароль, повторний пароль</param>
        /// <returns>Jwt token sha256</returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] RegisterViewModel model)
        {
            var token = await _authService.Register(model);

            if (string.IsNullOrEmpty(token))
                return BadRequest(new { errors = new { authError = "Реєстрація неуспішна" } });

            return Ok(new { token = token });
        }

        /// <summary>
        /// Вхід [Unauthorize]
        /// </summary>
        /// <param name="model">Пошта, пароль</param>
        /// <returns>Jwt token</returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginViewModel model)
        {
            string token = await _authService.Login(model);
            if (string.IsNullOrEmpty(token))
                return BadRequest(new { errors = new { authError = "Авторизація неуспішна" } });
            return Ok(new { token = token });
        }
    }
}
