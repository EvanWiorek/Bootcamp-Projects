from dojos_and_ninjas import app
from flask import render_template,redirect,request,session,flash
from dojos_and_ninjas.models.dojo import Dojo
from dojos_and_ninjas.models.ninja import Ninja

@app.route('/create_ninja', methods=['POST'])
def create_ninja():
    Ninja.save(request.form)
    print(request.form)
    return redirect('/dojos')

@app.route('/add_ninja')
def display_add_ninja_page():
    all_dojos = Dojo.get_all()
    return render_template("add_ninja.html", all_dojos=all_dojos)