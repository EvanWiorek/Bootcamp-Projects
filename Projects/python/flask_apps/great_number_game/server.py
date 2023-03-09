from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'this is a secret key'


@app.route('/')
def welcome():
    import random
    session['random_number'] = random.randint(1, 100)
    print(session['random_number'])
    return render_template('index.html', too_high = session['too_high'], success = session['success'])

@app.route('/guess', methods=['POST'])
def guess():
    if 'random_number' in session:
        pass
    else:
        session['random_number'] = 0

    session['guess'] = int(request.form['number'])

    if int(session['guess']) == int(session['random_number']):
        print("Success!")
        too_high = "Success!"
        success = "rgb(21, 255, 0)"
    elif int(session['guess']) > int(session['random_number']):
        print("Too high!")
        too_high = "Too high!"
        success = "red"
    else:
        print("Too low!")
        too_high = "Too low!"
        success = "red"

    session['too_high'] = too_high
    session['success'] = success

    return redirect('/')



@app.errorhandler(404)
def not_found(e):
    return "Dude! Where's my page? ..."


if __name__ == '__main__':
    app.run(debug=True)