using AutoMapper;
using Core.Entities.Identity;
using Core.Interfaces.Services;
using Core.ViewModels.Auth;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;

namespace Core.Services
{
    public class AuthService : IAuthService
    {
        private readonly UserManager<User> _userManager;
        private readonly ITokenService _tokenService;
        private readonly IMapper _mapper;
        private readonly IEmailSender _emailSender;
        private readonly IConfiguration _configuration;
        public AuthService(UserManager<User> userManager,
            ITokenService tokenService,
            IMapper mapper,
            IEmailSender emailSender,
            IConfiguration configuration)
        {
            _tokenService = tokenService;
            _userManager = userManager;
            _mapper = mapper;
            _emailSender = emailSender;
            _configuration = configuration;
        }

        #region Authorize
        public async Task<string> LoginAsync(LoginViewModel model)
        {
            User user = await _userManager.FindByEmailAsync(model.Email);

            if (user != null)
                if (await _userManager.CheckPasswordAsync(user, model.Password))
                    return _tokenService.CreateToken(user);

            return null;
        }

        public async Task<string> RegisterAsync(RegisterViewModel model)
        {
            //var img = ImageWorker.FromBase64StringToImage(model.Photo);

            //string randomFilename = Path.GetRandomFileName() + ".jpeg";
            //var dir = Path.Combine(Directory.GetCurrentDirectory(), "uploads", randomFilename);

            //img.Save(dir, ImageFormat.Jpeg);

            var user = _mapper.Map<User>(model);
            //user.Photo = randomFilename;

            var result = await _userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded)
                return null;

            await _userManager.AddToRoleAsync(user, ENV.Roles.User);
            return _tokenService.CreateToken(user);
        }

        public async Task<string> AuthByGoogleAccountAsync(GoogleAuthViewModel model)
        {
            var payload = await _tokenService.VerifyGoogleToken(model);
            if (payload == null)
            {
                return null;
            }
            var info = new UserLoginInfo("Google", payload.Subject, "Google");
            var user = await _userManager.FindByLoginAsync(info.LoginProvider, info.ProviderKey);

            if (user == null)
            {
                user = await _userManager.FindByEmailAsync(payload.Email);

                if (user == null)
                {
                    user = new User
                    {
                        Email = payload.Email,
                        UserName = payload.Email,
                        FirstName = payload.GivenName,
                        SecondName = payload.FamilyName
                    };
                    var resultCreate = await _userManager.CreateAsync(user);
                    if (!resultCreate.Succeeded)
                    {
                        return null;
                    }
                }

                var resultAddLogin = await _userManager.AddLoginAsync(user, info);
                if (!resultAddLogin.Succeeded)
                {
                    return null;
                }
            }

            string token = _tokenService.CreateToken(user);
            return token;
        }
        #endregion

        ////////////////////
        #region EmailConfirm
        public async Task<string> GenerateEmailConfirmationTokenAsync(string id)
        {
            var user = await _userManager.FindByIdAsync(id);

            if (user != null)
            {
                string token = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                return token;
            }
            return null;
        }

        public async Task<bool> SendEmailConfirmationTokenAsync(string id, string token)
        {
            var user = await _userManager.FindByIdAsync(id);
            if (!string.IsNullOrEmpty(token) && !user.EmailConfirmed && user != null)
            {
                string domain = _configuration.GetSection("Email:Domain").Value;
                string link = _configuration.GetSection("Email:ConfirmationLink").Value;

                EmailConfirmationViewModel model = new EmailConfirmationViewModel
                {
                    Email = user.Email,
                    PlaceHolders = new List<KeyValuePair<string, string>>()
                    {
                        new KeyValuePair<string, string>("{{Body}}", "Натисніть на посилання, щоб підтвердити пошту"),
                        new KeyValuePair<string, string>("{{Button}}", "Підтвердити"),
                        new KeyValuePair<string, string>("{{Link}}", string.Format(domain + link, user.Id, token))
                    }
                };
                return await _emailSender.SendEmailConfirmationAsync(model);
            }
            return false;
        }

        public async Task<IdentityResult> ConfirmEmailAsync(string uid, string token)
        {
            return await _userManager.ConfirmEmailAsync(await _userManager.FindByIdAsync(uid), token);
        }
        #endregion

    }
}
