from flask import Flask, render_template #we are able to do this because of Jinja

app = Flask(__name__)


@app.route('/')
def welcome():
    return render_template("welcome.html")


@app.route('/play')
def play():
    return render_template("play.html", x=3, color="#9fc5f8", y=0)

@app.route('/play/<int:x>')
def play_x(x):
    return render_template("play.html", x=x, color="#9fc5f8", y=0)

@app.route('/play/<int:y>/<string:color>')
def play_y_color(y, color):
    return render_template("play.html", x=0, y=y, color=color)


@app.errorhandler(404) # routes user to the 404 page
def not_found(e):
    return "Dude! Where's my page? ..."


if __name__=="__main__":
    app.run(debug=True)