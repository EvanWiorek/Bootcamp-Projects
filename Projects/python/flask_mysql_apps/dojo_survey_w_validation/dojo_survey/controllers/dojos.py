from dojo_survey import app
from flask import render_template,redirect,request,session,flash
from dojo_survey.models.dojo import Dojo

@app.route('/')
def survey_page():
    return render_template('index.html')

@app.route('/survey-form', methods=['POST'])
def answer_form():
    if not Dojo.validate_survey(request.form):
        return redirect('/')
    Dojo.save(request.form)
    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    session['comment'] = request.form['comment']
    return redirect('/submission')

@app.route('/submission')
def submission_page():
    return render_template('submission.html', name = session['name'], location = session['location'], language = session['language'], comment = session['comment'])

@app.errorhandler(404)
def not_found(e):
    return render_template("404.html")
