using Core;
using Core.Interfaces.Services;
using Core.Responses;
using Core.ViewModels.Auth;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace Jumaiysinba.Controllers
{
    [Route("[controller]")]
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
            ReCaptchaResponse recaptchaResponse = await getResponseFromReCaptcha(model.Token);
            if (recaptchaResponse.success)
            {
                var token = await _authService.Register(model);

                if (string.IsNullOrEmpty(token))
                    return BadRequest(new { errors = new { authError = "Реєстрація неуспішна" } });

                return Ok(new { token = token });

            }
            return BadRequest(new { errors = new { authError = "Помилка перевірки, спробуйте пізніше" } });
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
            ReCaptchaResponse recaptchaResponse = await getResponseFromReCaptcha(model.Token);
            if (recaptchaResponse.success)
            {
                string token = await _authService.Login(model);

                if (string.IsNullOrEmpty(token))
                    return BadRequest(new { errors = new { authError = "Авторизація неуспішна" } });

                return Ok(new { token = token });

            }
            return BadRequest(new { errors = new { authError = "Помилка перевірки" } });

        }

        /// <summary>
        /// Вихід [Authorize]
        /// </summary>
        /// <returns>Jwt token</returns>
        [HttpPost]
        [Route("logout")]
        public IActionResult Logout()
        {
            return Ok(new { token = "" });
        }

        private async Task<ReCaptchaResponse> getResponseFromReCaptcha(string token)
        {
            HttpClient client = new HttpClient();
            var response = await client.GetStringAsync($"https://www.google.com/recaptcha/api/siteverify?secret=" +
                $"{ENV.ReCaptcha.SecretKey}" +
                $"&response={token}");
            var reCaptcharesponse = JsonConvert.DeserializeObject<ReCaptchaResponse>(response);
            return reCaptcharesponse;
        }
    }
}
