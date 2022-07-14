using Core.Interfaces.Services;
using Core.ViewModels.Auth;
using Mailjet.Client;
using Mailjet.Client.Resources;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Services
{
    public class EmailSenderService : IEmailSender
    {
        private const string template = @"Templates/{0}.html";
        public static MailjetClient client = new MailjetClient("4747a4ba164ca6c5bc8eb00c0e7fcec5", "2788097148d9636d86009c2667719ba0");

        public async Task<bool> SendEmailConfirmationAsync(EmailConfirmationViewModel model)
        {
            try
            {
                model.Subject = UpdatePlaceHolders("Підтвердіть пошту", model.PlaceHolders);
                model.Body = UpdatePlaceHolders(GetEmailBody("EmailConfirmation"), model.PlaceHolders);

                var request = new MailjetRequest
                {
                    Resource = SendV31.Resource,
                }
                .Property(Send.Messages, new JArray {
                    new JObject {
                        {
                            "From", new JObject {
                                { "Email", "geres1793@gmail.com" },
                                { "Name", "Support" }
                            }
                        },
                        {
                            "To", new JArray {
                                new JObject {
                                    { "Email", model.Email },
                                    { "Name", model.Email }
                                }
                            }
                        },
                        { "Subject", model.Subject },
                        { "TextPart", model.Body },
                        { "HTMLPart", model.Body }
                    }
                });

                var response = await client.PostAsync(request);
                return response.IsSuccessStatusCode;
            }
            catch (Exception)
            {
                return false;
            }
        }
        private string GetEmailBody(string templateName)
        {
            var body = File.ReadAllText(string.Format(template, templateName));
            return body;
        }
        private string UpdatePlaceHolders(string text, List<KeyValuePair<string, string>> keyValuePairs)
        {
            if (!string.IsNullOrEmpty(text) && keyValuePairs != null)
            {
                foreach (var placeholder in keyValuePairs)
                {
                    if (text.Contains(placeholder.Key))
                    {
                        text = text.Replace(placeholder.Key, placeholder.Value);
                    }
                }
            }

            return text;
        }
    }
}
