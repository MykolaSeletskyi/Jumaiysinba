using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace Core.Entities.Identity
{
    public class User : IdentityUser<long>
    {
        /// <summary>
        /// Ім'я користувача
        /// </summary>
        [StringLength(100)]
        public string FirstName { get; set; }

        /// <summary>
        /// Прізвище користувача
        /// </summary>
        [StringLength(100)]
        public string SecondName { get; set; }

        ///// <summary>
        ///// Назва фото
        ///// </summary>
        //[StringLength(100)]
        //public string Photo { get; set; }

        public virtual ICollection<UserRole> UserRoles { get; set; }
    }
}
