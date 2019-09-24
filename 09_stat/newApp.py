
#Amber Chen & Vishwa Sofat
#SoftDev1 pd1
#K09: ’Tis Not a Race -- But You Will Go Faster
#2019-09-20

from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def hello_world():
    print(__name__)
    return ("saljhdasljn")

coll = [0,1,1,2,3,5,8]

@app.route("/my_foist_template")
def test_template():
    return render_template(
    'my_foist_template.html', foo = "Collection" , collection = coll)

if __name__ == "__main__":
    app.debug = True
    app.run()
