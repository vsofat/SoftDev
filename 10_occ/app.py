from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def hello_world():
    print(__name__)
    return ("saljhdasljn")

@app.route("/occupyflaskst")
def occupier():
    return render_template(
    'occupier.html', titulo = "Occupations Table" , description = "this is a table.")
