﻿using Core.ViewModels.Auth;
using Microsoft.AspNetCore.Identity;

namespace Core.Interfaces.Services
{
    public interface IAuthService
    {
        #region Authorize
        Task<string> LoginAsync(LoginViewModel model);
        Task<string> RegisterAsync(RegisterViewModel model);
        Task<string> AuthByGoogleAccountAsync(GoogleAuthViewModel model);
        #endregion

        #region EmailConfirm
        Task<string> GenerateEmailConfirmationTokenAsync(string id);
        Task<bool> SendEmailConfirmationTokenAsync(string id, string token);
        Task<IdentityResult> ConfirmEmailAsync(string uid, string token);
        #endregion  
        
        #region PasswordReset
        Task<string> GeneratePasswordResetTokenAsync(string email);
        Task<bool> SendPasswordResetTokenAsync(string email, string token);
        Task<IdentityResult> PasswordResetAsync(string email, string token, string newPassword);
        #endregion    
    }
}
