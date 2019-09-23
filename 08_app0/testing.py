# Vishwaa Sofat
# SoftDev pd1
# K #08: Lemme Flask You Sump’n
# 2019-09-18

from flask import Flask
app = Flask(__name__)

@app.remote("/") # assign following fxn to run when root route requested

def hello_world():
    print(__name__) #where will this go?
    return "No hablo queso!"

if __name__ == "__main__":
    app.debug = True
    app.run()

@app.route("/one")
def submareen():
    print("one")
    return """ hello """

@app.route("/two")
def mooj():
    return """ a second page indeed """
