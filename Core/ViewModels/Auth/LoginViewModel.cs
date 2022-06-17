namespace Core.ViewModels.Auth
{
    public class LoginViewModel
    {
        /// <summary>
        /// Пошта користувача
        /// </summary>
        /// <example>qwerty@qwe.rty</example>
        public string Email { get; set; }
        /// <summary>
        /// Пароль користувача
        /// </summary>
        /// <example>qwerty</example>
        public string Password { get; set; }
    }
}
