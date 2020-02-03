from flask import Flask
import os

os.path.dirname(__file__)
DIR = os.path.dirname(__file__) 
DIR += ‘/’

app = Flask(__name__)

@app.route("/")
def root():
    return "Hello world!"

if __name__ == "__main__":
    app.debug = True
    app.run()
