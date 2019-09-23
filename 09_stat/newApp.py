from flask import Flask, render_template
app = Flask(__name__)



@app.route("/")
def hello_world():
    print(__name__)
    return ("saljhdasljn")

if __name__ == "__main__":
    app.debug = True
    app.run()

coll = [0,1,1,2,3,5,8]

@app.route("/template")
def test_template():
    return render_template(
    'temp.html', foo = "Collection" , collection = coll)
