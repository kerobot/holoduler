# ホロジューラー

[ホロジュール](https://schedule.hololive.tv/)のホロライブスケジュールを取得します。

## 環境

* Windows 10 x64 1903
* Python 3.7.4 x64
* Power Shell 6 x64
* Visual Studio Code x64
* Git for Windows x64

## 手順1

```powershell
> mkdir holodule
> cd holodule
```

```powershell
> git init
```

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

[geckodriver](https://github.com/mozilla/geckodriver/releases)(geckodriver-v0.26.0-win64.zip)をダウンロードする。

geckodriver-v0.26.0-win64.zipを解凍し、geckodriver.exeをプロジェクトルートに配置する。

vscode .

.gitignore

```text
/venv/
/geckodriver.log
/geckodriver.exe
```

requirements.txt

```text
pylint
beautifulsoup4
requests
selenium
urllib3
lxml
google-api-python-client
```

```powershell
(venv) > pip install -r .\requirements.txt
```

## デバッグ

launch.json

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
