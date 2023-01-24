using holoduler.Services;

var builder = WebApplication.CreateBuilder(args);

var userName = builder.Configuration["Holoduler:UserName"];
var password = builder.Configuration["Holoduler:Password"];
var baseUrl = builder.Configuration["Holoduler:BaseUrl"];
builder.Services.AddTransient<IDataService>(_ => new DataService(userName, password, baseUrl));

builder.Services.AddControllers();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.MapControllerRoute(
    name: "default",
    pattern: "api/{controller}/{date?}");
app.MapFallbackToFile("index.html"); ;
app.Run();
