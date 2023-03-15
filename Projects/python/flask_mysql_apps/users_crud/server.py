from flask import Flask, render_template, request, redirect, session

from user import User
app = Flask(__name__)


@app.route('/')
def index():
    all_users = User.get_all()
    return render_template("read_all.html", all_users = all_users)

@app.route('/create_page')
def display_create_page():
    return render_template("create.html")


@app.route('/create_user', methods=['POST'])
def create():
    print(request.form)
    User.save(request.form)
    return redirect('/')

@app.route('/users/<int:user_id>/update_page')
def display_update_page(user_id):
        return render_template("update.html", user_id = user_id)

@app.route('/update_user', methods=['POST'])
def update():
    print(request.form)
    User.update_user(request.form)
    return redirect('/')

@app.route('/users/<int:id>')
def show_one_user(id):
    data = { 
        "user_id": id
    }
    return render_template("show_user.html", one_user=User.get_user_by_id(data))

@app.route('/users/<int:id>/delete')
def delete_user(id):
    data = { 
        "user_id": id
    }
    User.delete_user(data)
    return redirect('/')

@app.errorhandler(404)
def not_found(e):
    return render_template("404.html")


if __name__ == "__main__":
    app.run(debug=True)