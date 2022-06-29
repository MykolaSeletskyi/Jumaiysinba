﻿namespace Core.ViewModels.Auth
{
    public class RegisterViewModel
    {
        /// <summary>
        /// Пошта користувача
        /// </summary>
        /// <example></example>>
        public string Email { get; set; }

        /// <summary>
        /// Ім'я користувача
        /// </summary>
        /// <example></example>>
        public string FirstName { get; set; }

        /// <summary>
        /// Прізвище користувача
        /// </summary>
        /// <example></example>>
        public string SecondName { get; set; }

        ///// <summary>
        ///// Фотографія (base64) користувача
        ///// </summary>
        ///// <example>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</example>>
        //public string Photo { get; set; }

        /// <summary>
        /// Номер телефону користувача
        /// </summary>
        /// <example>1231231233</example>>
        public string Phone { get; set; }

        /// <summary>
        /// Пароль користувача
        /// </summary>
        /// <example></example>>
        public string Password { get; set; }

        /// <summary>
        /// Повторний пароль користувача
        /// </summary>
        /// <example></example>>
        public string ConfirmPassword { get; set; }

        /// <summary>
        /// Recaptcha token
        /// </summary>
        /// <example></example>
        public string Token { get; set; }
    }
}
