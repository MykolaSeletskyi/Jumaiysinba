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

        #region Authorize
        /// <summary>
        /// Реєстрація [Unauthorize]
        /// </summary>
        /// <param name="model">Пошта, ім'я, прізвище, фотографія (base64), номер телефону, пароль, повторний пароль, recaptcha token</param>
        /// <returns>Jwt token sha256</returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] RegisterViewModel model)
        {
            ReCaptchaResponse recaptchaResponse = await getResponseFromReCaptcha(model.Token);
            if (recaptchaResponse.success)
            {
                var token = await _authService.RegisterAsync(model);

                if (string.IsNullOrEmpty(token))
                    return BadRequest(new { errors = new { authError = "Реєстрація неуспішна" } });

                return Ok(new { token = token });
            }
            return BadRequest(new { errors = new { authError = "Помилка перевірки, спробуйте пізніше" } });
        }

        /// <summary>
        /// Вхід [Unauthorize]
        /// </summary>
        /// <param name="model">Пошта, пароль, recaptcha token</param>
        /// <returns>Jwt token</returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginViewModel model)
        {
            ReCaptchaResponse recaptchaResponse = await getResponseFromReCaptcha(model.Token);
            if (recaptchaResponse.success)
            {
                string token = await _authService.LoginAsync(model);

                if (string.IsNullOrEmpty(token))
                    return BadRequest(new { errors = new { authError = "Авторизація неуспішна" } });

                return Ok(new { token = token });
            }
            return BadRequest(new { errors = new { authError = "Помилка перевірки" } });
        }

        /// <summary>
        /// Авторизація (реєстрація/логін) через Google account [Unauthorize]
        /// </summary>
        /// <param name="model">Номер токену</param>
        /// <returns>Jwt token</returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("auth-by-google-account")]
        public async Task<IActionResult> AuthByGoogleAccount([FromBody] GoogleAuthViewModel model)
        {
            string token = await _authService.AuthByGoogleAccountAsync(model);
            if (!string.IsNullOrEmpty(token))
                return Ok(new { token = token });
            return BadRequest(new { errors = new { authError = "Авторизація неуспішна" } });
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
        #endregion

        #region ConfirmEmail
        /// <summary>
        /// Відправити на пошту запит [Authorize]
        /// </summary>
        /// <param name="id">Номер користувача</param>
        /// <returns>Стан відправки</returns>
        [HttpGet]
        [Route("send-confirm-email-token")]
        public async Task<IActionResult> SendConfirmEmailToken(string id)
        {
            string token = await _authService.GenerateEmailConfirmationTokenAsync(id);
            if (!string.IsNullOrEmpty(token))
            {
                bool success = await _authService.SendEmailConfirmationTokenAsync(id, token);
                if (success)
                    return Ok(new { isSended = true});
            }
            return BadRequest(new { isSended = false });
        }

        /// <summary>
        /// Перевірка та підтвердження [Authorize]
        /// </summary>
        /// <param name="id">Номер користувача</param>
        /// <param name="token">Токен підтвердження</param>
        /// <returns>Успіх підтвердження</returns>
        [HttpGet]
        [Route("confirm-email")]
        public async Task<IActionResult> ConfirmEmail(string id, string token)
        {
            if (!string.IsNullOrEmpty(id) && !string.IsNullOrEmpty(token))
            {
                token = token.Replace(' ', '+');
                var result = await _authService.ConfirmEmailAsync(id, token);
                if (result.Succeeded)
                {
                    return Ok(new { isSucceededConfirm = true });
                }
            }
            return BadRequest(new { isSucceededConfirm = false });
        }
        #endregion

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
