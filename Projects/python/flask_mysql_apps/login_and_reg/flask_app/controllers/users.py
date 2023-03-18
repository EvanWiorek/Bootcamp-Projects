from flask_app import app
from flask_bcrypt import Bcrypt
from flask import render_template,redirect,request,session,flash
from flask_app.models.user import User

bcrypt = Bcrypt(app)

@app.route('/')
def route_to():
    return redirect('/login_and_reg')

@app.route('/login_and_reg')
def display_login_and_reg():
    return render_template('login_and_reg.html')

@app.route('/register', methods=['POST'])
def register_user():
    if not User.validate_user_reg(request.form):
        return redirect('/')
    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    # print(pw_hash)
    # data = {
    #     "first_name" : request.form['first_name'],
    #     "last_name" : request.form['last_name'],
    #     "email" : request.form['email'],
    #     "password" : pw_hash
    # }
    data = {
        **request.form,
        "password" : pw_hash
    }
    user_id = User.save(data)
    session['user_id'] = user_id
    return redirect('/welcome')


@app.route('/login', methods=['POST'])
def login_user():
    data = {
        "email" : request.form["email"]
    }
    user_in_db = User.get_user_by_email(data)
    if not user_in_db:
        flash("Invalid Email/Password.","invalid_info")
        return redirect('/')
    if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
        flash("Invalid Email/Password.","invalid_info")
        return redirect('/')
    session['user_id'] = user_in_db.id
    # print(user_in_db.id)
    return redirect('/welcome')

@app.route('/welcome')
def welcome_page():
    if 'user_id' in session:
        user_id = session['user_id']
        # print("user_id is:", user_id)
        data = {
            "user_id" : user_id #if I have this as "id" : user_id, I need get_user_by_id to be %(id)s instead of %(user_id)s
        }
        # print(data)
        current_user = User.get_user_by_id(data)
        # print(current_user)
        return render_template('welcome.html', current_user = current_user)
    else:
        return redirect('/')

@app.route('/logout')
def destroy_session():
    session.clear()
    return redirect('/')

@app.errorhandler(404)
def not_found(e):
    return render_template("404.html")
