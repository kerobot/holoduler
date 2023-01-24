using holoduler.Services;
using Microsoft.AspNetCore.Mvc;
using RestSharp;

namespace holoduler.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HoloduleController : ControllerBase
    {
        private readonly IDataService _dataService;
        private readonly ILogger<HoloduleController> _logger;

        public HoloduleController(ILogger<HoloduleController> logger, IDataService dataService)
        {
            _logger = logger;
            _dataService = dataService;
        }

        [HttpGet("{date}")]
        public async Task<string?> Get(string date)
        {
            string jwtToken = Request.Headers["Authorization"];

            var client = new RestClient(_dataService.BaseUrl);
            var getRequest = new RestRequest($"/holodules/{date}");
            getRequest.AddHeader("Content-Type", "application/json");
            getRequest.AddHeader("Authorization", $"JWT {jwtToken}");

            var getResponse = await client.GetAsync(getRequest);
            if (getResponse.IsSuccessful)
            {
                return getResponse.Content;
            }

            return "error";
        }
    }
}
