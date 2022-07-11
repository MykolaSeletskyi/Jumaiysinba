using Core.ViewModels.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces.Services
{
    public interface IEmailSender
    {
        Task<bool> SendEmailConfirmationAsync(EmailConfirmationViewModel model);
    }
}
