from flask_app.models.user import User
from flask_app import app
from flask import render_template, jsonify, request, redirect, json
from flask_cors import cross_origin #this is a setup method

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/users', methods = ['GET'])
@cross_origin( origins = ['http://localhost:5000'] )
def users():
    return jsonify(User.get_all_json())

@app.route('/create/user',methods=['POST'])
@cross_origin( origins = ['http://localhost:5000'] )
def create_user():
    new_user = json.loads(request.data.decode('UTF-8'))
    user_id = User.save(new_user)
    response_dicitonary = {
        "message" : "User added.",
        "user_id" : user_id
    }
    return jsonify(response_dicitonary), 201

@app.route( '/delete/user/<int:id>', methods = ['DELETE'])
@cross_origin( origins = ['http://localhost:5000'] )
def delete_user( id ):
    data = {
        "user_id" : id
    }
    message = User.delete_user( data )
    return (( jsonify({}) ), 204)