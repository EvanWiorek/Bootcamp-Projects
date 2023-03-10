from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'this is a secret key'


@app.route('/')
def survey_page():
    return render_template('index.html')

@app.route('/survey-form', methods=['POST'])
def answer_form():
    session['username'] = request.form['name']
    session['userlocation'] = request.form['location']
    session['userlanguage'] = request.form['language']
    session['usercomments'] = request.form['comments']
    return redirect('/submission')

@app.route('/submission')
def submission_page():
    return render_template('submission.html', username = session['username'], userlocation = session['userlocation'], userlanguage = session['userlanguage'], usercomments = session['usercomments'])

@app.errorhandler(404)
def not_found():
    return "Dude! Where's my page? ..."


if __name__ == '__main__':
    app.run(debug=True)