using AutoMapper;
using Core.Entities.Identity;
using Core.Interfaces.Services;
using Core.ViewModels.Auth;
using Microsoft.AspNetCore.Identity;

namespace Core.Services
{
    public class AuthService : IAuthService
    {
        private readonly UserManager<User> _userManager;
        private readonly IMapper _mapper;
        private readonly ITokenService _tokenService;
        public AuthService(UserManager<User> userManager, ITokenService tokenService,
            IMapper mapper)
        {
            _tokenService = tokenService;
            _userManager = userManager;
            _mapper = mapper;
        }

        public async Task<string> Login(LoginViewModel model)
        {
            User user = await _userManager.FindByEmailAsync(model.Email);
         
            if (user != null)
                if (await _userManager.CheckPasswordAsync(user, model.Password))
                    return _tokenService.CreateToken(user);
            
            return null;
        }

        public async Task<string> Register(RegisterViewModel model)
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

        public async Task<string> AuthByGoogleAccount(GoogleAuthViewModel model)
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
    }
}
