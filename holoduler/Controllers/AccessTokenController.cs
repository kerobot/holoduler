using holoduler.Modls;
using holoduler.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RestSharp;

namespace holoduler.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccessTokenController : ControllerBase
    {
        private readonly IDataService _dataService;
        private readonly ILogger<AccessTokenController> _logger;

        public AccessTokenController(ILogger<AccessTokenController> logger, IDataService dataService)
        {
            _logger = logger;
            _dataService = dataService;
        }

        [HttpGet]
        public async Task<string?> Get()
        {
            _logger.LogInformation("request access token.");

            var auth = new Auth(_dataService.UserName, _dataService.Password);
            var json = JsonConvert.SerializeObject(auth);

            var client = new RestClient(_dataService.BaseUrl);
            var postRequest = new RestRequest("/auth").AddJsonBody(json);

            var postResponse = await client.PostAsync(postRequest);
            if (postResponse.IsSuccessful)
            {
                return postResponse.Content;
            }

            return "error";
        }
    }
}
