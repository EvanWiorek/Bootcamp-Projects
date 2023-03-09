from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'this is a secret key'


@app.route('/')
def welcome():     
    if 'count' in session:
        session["count"] += 1
    else:
        session['count'] = 1
    
    if 'manual_count' in session:
        pass
    else:
        session['manual_count'] = 0
    return render_template('count.html', count = session['count'], man_count = session['manual_count'])
    

@app.route('/add-to-count-<int:x>')
def add_to_count(x):
    session['count'] += x-1
    return redirect('/')

@app.route('/manual_add', methods=['POST'])
def manual_add_to_count():
    session['count'] += int(request.form['number'])
    if 'manual_count' in session:
        session['manual_count'] += int(request.form['number'])
    else:
        session['manual_count'] = int(request.form['number'])
    return redirect('/')


@app.route("/destroy_session")
def destroy():
    session.clear()
    return redirect("/")


@app.errorhandler(404)
def not_found(e):
    return "Dude! Where's my page? ..."


if __name__ == '__main__':
    app.run(debug=True)