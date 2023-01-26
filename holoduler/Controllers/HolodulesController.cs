using holoduler.Modls;
using holoduler.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RestSharp;
using System;

namespace holoduler.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HolodulesController : ControllerBase
    {
        private readonly IDataService _dataService;
        private readonly ILogger<HolodulesController> _logger;

        public HolodulesController(ILogger<HolodulesController> logger, IDataService dataService)
        {
            _logger = logger;
            _dataService = dataService;
        }

        [HttpGet("{date}")]
        public async Task<string?> Get(string date)
        {
            _logger.LogInformation("request access token.");

            var auth = new Auth(_dataService.UserName, _dataService.Password);
            var json = JsonConvert.SerializeObject(auth);
            var client = new RestClient(_dataService.BaseUrl);

            var postRequest = new RestRequest("/login").AddJsonBody(json);
            var postResponse = await client.PostAsync(postRequest);
            if (!postResponse.IsSuccessful || postResponse.Content == null)
            {
                return "error";
            }
 
            Token? token = JsonConvert.DeserializeObject<Token>(postResponse.Content);
            if (token == null)
            {
                return "error";
            }

            _logger.LogInformation("request holodules {date}.", date);

            var getRequest = new RestRequest($"/holodules/{date}");
            getRequest.AddHeader("Content-Type", "application/json");
            getRequest.AddHeader("Authorization", $"Bearer {token.AccessToken}");
            var getResponse = await client.GetAsync(getRequest);
            if (!getResponse.IsSuccessful)
            {
                return "error";
            }

            return getResponse.Content;
        }
    }
}
