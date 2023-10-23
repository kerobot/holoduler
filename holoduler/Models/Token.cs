using Newtonsoft.Json;

namespace holoduler.Models
{
    /// <summary>
    /// Web API から返却されるアクセストークンを保持するクラス
    /// </summary>
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
