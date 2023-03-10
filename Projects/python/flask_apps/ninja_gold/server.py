from flask import Flask, render_template, request, redirect, session
import datetime
x = datetime.datetime.now()

app = Flask(__name__)
app.secret_key = 'this is a secret key'

@app.route('/')
def welcome():
    if 'gold' not in session:
        session['gold'] = 0
    if 'activity_message' not in session:
        session['activity_message'] = ""
    return render_template('index.html', your_gold = session['gold'], activity_message = session['activity_message'])

@app.route('/process_money', methods=['POST'])
def process_money():
    import random

    if request.form['which_form'] == 'farm_gold':
        session['gold_farm'] = random.randrange(10,20)
        session['gold'] += session['gold_farm']
        session['activity_message'] = f"<li style='color: green;'>Earned {session['gold_farm']} gold from the farm! ({x:%Y/%m/%d %I:%M %p}) </li>" + session['activity_message']

    elif request.form['which_form'] == 'cave_gold':
        session['gold_cave'] = random.randrange(5,10)
        session['gold'] += session['gold_cave']
        session['activity_message'] = f"<li style='color: green;'>Earned {session['gold_cave']} gold from the cave! ({x:%Y/%m/%d %I:%M %p}) </li>" + session['activity_message']

    elif request.form['which_form'] == 'house_gold':
        session['gold_house'] = random.randrange(2,5)
        session['gold'] += session['gold_house']
        session['activity_message'] = f"<li style='color: green;'>Earned {session['gold_house']} gold from the cave! ({x:%Y/%m/%d %I:%M %p}) </li>" + session['activity_message']

    elif request.form['which_form'] == 'casino_gold':
        session['gold_casino'] = random.randrange(1,50) - random.randrange(1,50)
        current_gold = session['gold']
        gold_plus_from_casino = session['gold'] + session['gold_casino']
        session['gold'] += session['gold_casino']
        
        if current_gold < gold_plus_from_casino:
            session['activity_message'] = f"<li style='color: green;'>Entered a casino and won {session['gold_casino']} gold! ({x:%Y/%m/%d %I:%M %p}) </li>" + session['activity_message']

        else:
            session['activity_message'] = f"<li style='color: red;'>Entered a casino and lost {session['gold_casino']} gold...Ouch.. ({x:%Y/%m/%d %I:%M %p}) </li>" + session['activity_message']

    elif request.form['which_form'] == 'reset':
        return redirect('/destroy_session')
    
    return redirect('/')

@app.route("/destroy_session")
def destroy():
    session.clear()
    return redirect("/")

def not_found(e):
    return "Dude! Where's my page? ..."

if __name__ == '__main__':
    app.run(debug=True)