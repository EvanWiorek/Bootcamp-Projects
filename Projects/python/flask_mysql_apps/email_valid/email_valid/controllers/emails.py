from email_valid import app
from flask import render_template,redirect,request,session,flash
from email_valid.models.email import Email

@app.route('/')
def route_to():
    return redirect('emails')

@app.route('/emails')
def email_input():
    return render_template('email_input.html')

@app.route('/add_email', methods=['POST'])
def answer_form():
    if not Email.validate_email(request.form):
        return redirect('/')
    Email.save(request.form)
    return redirect('/submission')

@app.route('/submission')
def submission_page():
    all_emails = Email.get_all()
    return render_template('submission.html', all_emails = all_emails)

# @app.route('/submission')
# def submission_page():
#     return render_template('submission.html')

@app.errorhandler(404)
def not_found(e):
    return render_template("404.html")
