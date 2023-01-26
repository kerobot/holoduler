using Newtonsoft.Json;

namespace holoduler.Modls
{
    [JsonObject]
    public class Token
    {
        [JsonProperty("access_token")]
        public string? AccessToken { get; private set; }

        public Token()
        {
        }
    }
}
