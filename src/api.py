from flask import Flask,jsonify
from flask_cors import CORS
import json
import time
import requests

app = Flask(__name__)
CORS(app)

TOP_10_FILE = 'top10.json'
RET = 24 * 60 * 60
ALL_FILE = "all_crypto.json"
ALLEXCHANGES_FILE = "allexchanges_crypto.json"

def load_json():
    try:
        with open(TOP_10_FILE,'r') as f:
            data = json.load(f)
        return data
    except:
        return None
    
def save_json(data):
    with open(TOP_10_FILE, "w") as f:
        json.dump(data, f)

def load_all_json():
    try:
        with open(ALL_FILE,'r') as f:
            data = json.load(f)
        return data
    except:
        return None
def load_allexchanges_json():
    try:
        with open(ALLEXCHANGES_FILE,'r') as f:
            data = json.load(f)
        return data
    except:
        return None
def save_allexchanges_json(data):
    with open(ALLEXCHANGES_FILE, "w") as f:
        json.dump(data, f)

def save_all_json(data):
    with open(ALL_FILE, "w") as f:
        json.dump(data, f)

def get_top_10_crypto():
    url = 'https://api.coingecko.com/api/v3/coins/markets'
    params = {
        "vs_currency": "usd",
        "order": "market_cap_desc",
        "per_page": 10,
        "page": 1,
        "sparkline": False        
    }
    response = requests.get(url,params=params)
    response.raise_for_status()
    return response.json()

def get_exchange():
    url = 'https://api.coingecko.com/api/v3/exchanges'
    response = requests.get(url)
    return response.json()

def get_all_crypto():
    url = 'https://api.coingecko.com/api/v3/coins/markets'
    params = {
        "vs_currency": "usd",
        "order": "market_cap_desc",
        "per_page": 250,
        "sparkline": False        
    }
    response = requests.get(url,params=params)
    response.raise_for_status()
    return response.json()


@app.route('/api/top10')
def load_coin_api():
    data = load_json()
    if not data:
        coins = get_top_10_crypto()
        data = {
            "coins":coins
        }
        save_json(data)
    return jsonify(data)

@app.route("/api/all_crypto")
def getAllCrypto():
    data = load_all_json()
    if not data:
        coins = get_all_crypto()
        data = {
            "coins":coins
        }
        save_all_json(data)
    return jsonify(data)

@app.route("/api/all_exchanges")
def getAllExchanges():
    data = load_allexchanges_json()
    if not data:
        exchanges = get_exchange()
        data = {
            "exchanges":exchanges
        }
        save_allexchanges_json(data)
    return jsonify(data)
if __name__ == "__main__":
    app.run(debug=True)