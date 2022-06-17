using Core.Entities.Identity;
using System.Security.Claims;

namespace Core.Interfaces.Services
{
    public interface ITokenService
    {
        string CreateToken(User user);
        string GenerateRefreshToken();
        ClaimsPrincipal GetPrincipalFromExpiredToken(string token);
    }
}
