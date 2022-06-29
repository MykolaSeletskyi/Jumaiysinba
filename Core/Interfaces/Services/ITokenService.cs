using Core.Entities.Identity;
using Core.ViewModels.Auth;
using Google.Apis.Auth;
using System.Security.Claims;

namespace Core.Interfaces.Services
{
    public interface ITokenService
    {
        string CreateToken(User user);
        string GenerateRefreshToken();
        Task<GoogleJsonWebSignature.Payload> VerifyGoogleToken(GoogleAuthViewModel request);
        //ClaimsPrincipal GetPrincipalFromExpiredToken(string token);
    }
}
