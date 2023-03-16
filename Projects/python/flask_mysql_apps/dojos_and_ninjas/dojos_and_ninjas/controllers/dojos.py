from dojos_and_ninjas import app
from flask import render_template,redirect,request,session,flash
from dojos_and_ninjas.models.dojo import Dojo
from dojos_and_ninjas.models.ninja import Ninja

@app.route('/')
def route_correction():
     return redirect('/dojos')

@app.route('/dojos')
def index():
    all_dojos = Dojo.get_all()
    # print(all_dojos)
    return render_template("dojos.html", all_dojos = all_dojos)


@app.route('/create_dojo', methods=['POST'])
def create():
    print(request.form)
    Dojo.save(request.form)
    return redirect('/dojos')



@app.route('/dojos/<int:id>')
def show_one_dojo(id):
    data = { 
        "dojo_id": id
    }
    dojo_with_ninjas = Dojo.get_all_ninjas_in_dojo(data)
    # print(all_ninjas)
    return render_template("show_dojo.html", one_dojo=Dojo.get_dojo_by_id(data), dojo_with_ninjas = dojo_with_ninjas.ninjas)


@app.errorhandler(404)
def not_found(e):
    return render_template("404.html")