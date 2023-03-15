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




if __name__ == "__main__":
    app.run(debug=True)