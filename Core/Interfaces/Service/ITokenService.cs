using Core.Entities.Identity;
using System.Security.Claims;

namespace Core.Interfaces.Service
{
    public interface ITokenService
    {
        string CreateToken(User user);
        string GenerateRefreshToken();
        ClaimsPrincipal GetPrincipalFromExpiredToken(string token);
    }
}
