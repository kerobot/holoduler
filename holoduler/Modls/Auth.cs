using Newtonsoft.Json;

namespace holoduler.Modls
{
    [JsonObject]
    public class Auth
    {
        [JsonProperty("username")]
        public string Username { get; private set; }

        [JsonProperty("password")]
        public string Password { get; private set; }

        public Auth(string username, string password)
        {
            this.Username = username;
            this.Password = password;
        }
    }
}
