using AutoMapper;
using Core.Entities.Identity;
using Core.Interfaces.Service;
using Jumaiysinba.ViewModels;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Services
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
    }
}
