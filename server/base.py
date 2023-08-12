from flask import Flask, jsonify, request
import pickle
import numpy as np
from flask_cors import CORS


api = Flask(__name__)
cors = CORS(api)

moodys_ratings = ["Aaa", "Aa1", "Aa2", "Aa3", "A1", "A2", "A3", "Baa1", "Baa2", "Baa3", "Ba1", "Ba2", "Ba3", "B1", "B2", "B3", "Caa1", "Caa2", "Caa3", "Ca", "C", "WR", "NR"]
moodys_rating_to_rank = {rating: rank+1 for rank, rating in enumerate(moodys_ratings)}

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
    rating0 = data['rating0']  # before
    rating1 = data['rating1']  # after
    rank0 = moodys_rating_to_rank[rating0]
    rank1 = moodys_rating_to_rank[rating1]
    spread_pred = reg.predict(np.array([rank0, rank1]).reshape(-1, 1))
    spread_change = spread_pred[1] - spread_pred[0]
    response = {
        'spread0': spread_pred[0],
        'spread1': spread_pred[1],
        'spread_change': spread_change
    }
    return jsonify(response)