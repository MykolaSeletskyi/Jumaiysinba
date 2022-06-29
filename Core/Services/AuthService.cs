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
        private readonly ITokenService _jwtTokenService;
        public AuthService(UserManager<User> userManager, ITokenService jwtTokenService,
            IMapper mapper)
        {
            _jwtTokenService = jwtTokenService;
            _userManager = userManager;
            _mapper = mapper;
        }

        public async Task<string> Login(LoginViewModel model)
        {
            User user = await _userManager.FindByEmailAsync(model.Email);
         
            if (user != null)
                if (await _userManager.CheckPasswordAsync(user, model.Password))
                    return _jwtTokenService.CreateToken(user);
            
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
            return _jwtTokenService.CreateToken(user);
        }
    }
}
