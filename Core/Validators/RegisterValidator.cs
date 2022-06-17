using Core.Entities.Identity;
using Core.ViewModels.Auth;
using FluentValidation;
using Microsoft.AspNetCore.Identity;

namespace Core.Validators
{
    public class RegisterValidator : AbstractValidator<RegisterViewModel>
    {
        private readonly UserManager<User> _userManager;
        public RegisterValidator(UserManager<User> userManager)
        {
            _userManager = userManager;
            RuleFor(x => x.Email)
               .NotEmpty().WithMessage("Поле пошта є обов'язковим!")
               .EmailAddress().WithMessage("Пошта є не коректною!")
               .DependentRules(() =>
               {
                   RuleFor(x => x.Email).Must(BeUniqueEmail)

                    .WithMessage("Дана пошта уже зареєстрована!");
               });
            RuleFor(x => x.Password)
                .NotEmpty().WithName("Password").WithMessage("Поле пароль є обов'язковим!")
                .MinimumLength(5).WithName("Password").WithMessage("Поле пароль має містити міннімум 5 символів!");

            RuleFor(x => x.FirstName)
                .NotEmpty().WithMessage("Поле ім'я є обов'язковим!")
                .MinimumLength(2).WithMessage("Поле має мати міннімум 2 символів!");

            RuleFor(x => x.ConfirmPassword)
                .NotEmpty().WithName("ConfirmPassword").WithMessage("Поле є обов'язковим!")
                 .Equal(x => x.Password).WithMessage("Поролі не співпадають!");

            RuleFor(x => x.Photo)
               .NotEmpty().WithName("Photo").WithMessage("Поле пароль є обов'язковим!");
        }
        private bool BeUniqueEmail(string email)
        {
            return _userManager.FindByEmailAsync(email).Result == null;
        }
    }
}