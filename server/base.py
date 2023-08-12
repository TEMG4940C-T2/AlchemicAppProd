from flask import Flask
import pickle

api = Flask(__name__)

@api.route('/profile')
def my_profile():
    response_body = {
        "name": "Test",
        "about" :"This is an example of how you would set up a flask API endpoint"
    }
    return response_body


@api.route('/creditMigrationPrediction')
def creditMigrationPrediction():
    response_body = {
        "name": "Epic",
        "about": "games"
    }
    return response_body  