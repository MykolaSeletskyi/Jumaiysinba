using Core.Interfaces.Service;
using Jumaiysinba.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
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
        /// Вхід [Unauthorize]
        /// </summary>
        /// <param name="model">Пошта, пароль</param>
        /// <returns>Jwt token</returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginViewModel model)
        {
            string token = _authService.Login(model).Result;
            if (string.IsNullOrEmpty(token))
                return BadRequest(new { errors = new { login = "Авторизація неуспішна" } });
            return Ok(new { token = token });
        }
    }
}
