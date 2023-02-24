using holoduler.Services;

var builder = WebApplication.CreateBuilder(args);
// 環境変数から取得
var userName = Environment.GetEnvironmentVariable("API_USERNAME")!;
var password = Environment.GetEnvironmentVariable("API_PASSWORD")!;
var baseUrl = Environment.GetEnvironmentVariable("API_URL")!;
// サービスコンテナへ登録
builder.Services.AddTransient<IDataService>(_ => new DataService(userName, password, baseUrl));
// コントローラーを使用
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
// Web API 2 の属性ルーティング（Attribute routing）
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});
app.MapFallbackToFile("index.html"); ;
app.Run();
