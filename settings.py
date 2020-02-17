import os
from os.path import join, dirname
from dotenv import load_dotenv

# .env ファイルを明示的に指定して読み込む
dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

# ホロジュールのURL
HOLODULE_URL = os.environ.get("HOLODULE_URL")
# Youtube Data API v3 の APIキー
API_KEY = os.environ.get("API_KEY")
# Youtube Data API v3 の APIサービス名
API_SERVICE_NAME = os.environ.get("API_SERVICE_NAME")
# Youtube Data API v3 の APIバージョン
API_VERSION = os.environ.get("API_VERSION")
