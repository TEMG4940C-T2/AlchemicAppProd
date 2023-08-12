from flask import Flask, jsonify, request
import pickle
import numpy as np


api = Flask(__name__)

with open('rank_spread_pred.pkl', 'rb') as file:
    reg = pickle.load(file)

@api.route('/profile')
def my_profile():
    response_body = {
        "name": "Test",
        "about" :"This is an example of how you would set up a flask API endpoint"
    }
    return response_body

@api.route('/epic')
def epic():
    response_body = {
        "name": "Epic",
        "about": "games"
    }
    return response_body  

@api.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    rank0 = data['rank0']  # before
    rank1 = data['rank1']  # after
    spread_pred = reg.predict(np.array([rank0, rank1]).reshape(-1, 1))
    spread_change = spread_pred[1] - spread_pred[0]
    response = {
        'spread0': spread_pred[0],
        'spread1': spread_pred[1],
        'spread_change': spread_change
    }
    return jsonify(response)