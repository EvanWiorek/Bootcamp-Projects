from flask import Flask, render_template, request, redirect
app = Flask(__name__)  

@app.route('/')         
def index():
    return render_template("index.html")

@app.route('/checkout', methods=['POST'])       #action of the form  
def checkout():
    data = request.form
    fruit_count = int(data['strawberry']) + int(data['raspberry']) + int(data['apple'])
    print(f"Charging {data['first_name']} for {fruit_count} fruits")
    print(data)
    return render_template("checkout.html", fruit_count=fruit_count)
    


if __name__=="__main__":   
    app.run(debug=True)    