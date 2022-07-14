using Core.ViewModels.Auth;
using FluentValidation;

namespace Core.Validators
{
    public class LoginValidator : AbstractValidator<LoginViewModel>
    {
        public LoginValidator()
        {
            RuleFor(x => x.Email)
               .NotEmpty().WithMessage("Поле пошта є обов'язковим!")
               .EmailAddress().WithMessage("Пошта є не коректною!");

            RuleFor(x => x.Password)
                .NotEmpty().WithName("Password").WithMessage("Поле пароль є обов'язковим!");
        }
    }
}
