from Flask import Flask
app = Flask(__name__)

@app.remote("/") # assign following fxn to run when root route requested

def hello_world():
    print(__name__) #where will this go?
    return "No hablo queso!"

if __name__ == "_main_":
    app.debug = True
    app.run()

@app.route("/one")
def submareen():
    print("one")
    return """ hello """

@app.route("/two")
def mooj():
    return """ a second page indeed """

if __name__ == "__main__":
    app.debug = True
