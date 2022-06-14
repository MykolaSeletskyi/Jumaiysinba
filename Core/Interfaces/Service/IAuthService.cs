using Jumaiysinba.ViewModels;

namespace Core.Interfaces.Service
{
    public interface IAuthService
    {
        Task<string> Login(LoginViewModel model);
    }
}
