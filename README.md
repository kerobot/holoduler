# ホロジューラー

[ホロジュール](https://schedule.hololive.tv/)のホロライブスケジュールとYoutubeの動画情報を取得します。

## 環境

* Windows 10 x64 1903
* Python 3.7.4 x64
* Power Shell 6 x64
* Visual Studio Code x64
* Git for Windows x64

## プロジェクトディレクトリの作成

```powershell
> mkdir holoduler
> cd holoduler
```

## git 初期化

```powershell
> git init
```

## Python 仮想環境の構築

```powershell
> python -V
Python 3.7.4
> pip install virtualenv
```

```powershell
> virtualenv venv
> activate
(venv) > python -V
Python 3.7.4
```

## Webスクレイピングのための geckodriver のダウンロード

* [geckodriver](https://github.com/mozilla/geckodriver/releases)(geckodriver-v0.26.0-win64.zip)をダウンロードする。
* geckodriver-v0.26.0-win64.zipを解凍し、geckodriver.exeをプロジェクトルートに配置する。

## Youtube 動画情報取得のための Youtube Data API の有効化

* Google Developer Console にログイン
* ダッシュボードでプロジェクトを作成
* ライブラリで Youtube Data API v3 を有効化
* 認証情報で認証情報を作成して APIキー を取得

## .env の作成

* .envファイルを作成する
* .env.sampleを参考にURLやAPIキーを設定する

## .gitignore の作成

```text
/venv/
/geckodriver.log
/geckodriver.exe
.env
```

## requirements.txt の作成

```text
pylint
beautifulsoup4
requests
selenium
urllib3
lxml
google-api-python-client
python-dotenv
```

## requirements.txt を利用して pip インストール

```powershell
(venv) > pip install -r .\requirements.txt
```

## launch.json を作成してデバッグ実行

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Python: Current File",
            "type": "python",
            "request": "launch",
            "program": "${file}",
            "console": "integratedTerminal",
            "args": ["c:\\temp\\holodule.csv"]
        }
    ]
}
```
