using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.ViewModels.Auth
{
    public class EmailViewModel
    {
        /// <summary>
        /// Пошта для відправки
        /// </summary>
        public string Email { get; set; }
        /// <summary>
        /// Значення для Templates/EmailConfirmation.html
        /// </summary>
        public string Body { get; set; }
        /// <summary>
        /// Значення для Templates/EmailConfirmation.html
        /// </summary>
        public string Subject { get; set; }
        /// <summary>
        /// Значення для Templates/EmailConfirmation.html
        /// </summary>
        public List<KeyValuePair<string, string>> PlaceHolders { get; set; }
    }
}
