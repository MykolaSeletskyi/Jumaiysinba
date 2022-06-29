using Core.ViewModels.Auth;

namespace Core.Interfaces.Services
{
    public interface IAuthService
    {
        Task<string> Login(LoginViewModel model);
        Task<string> Register(RegisterViewModel model);
        Task<string> AuthByGoogleAccount(GoogleAuthViewModel model);
    }
}
