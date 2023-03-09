from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def welcome():
    return render_template("8_8.html")

@app.route('/4')
def checkerboard_8_4():
    return render_template("8_4.html")

@app.route('/<int:x>/<int:y>')
def checkerboard_x_y(x,y):
    return render_template("x_y.html", x=x, y=y, colorone="red", colortwo="black")


@app.errorhandler(404) # routes user to the 404 page
def not_found(e):
    return "Dude! Where's my page? ..."


if __name__=="__main__":
    app.run(debug=True)