from flask import Flask, render_template
import json
from urllib.request import urlopen
app = Flask(__name__)

@app.route("/")
def root():
    return render_template('index.html')

@app.route("/qod")
def quote():
    url = urlopen("http://quotes.rest/qod.json")
    response = url.read()
    data = json.loads(response)
    print(data['contents']['quotes'][0]['quote'], data['contents']['quotes'][0]['author'])
    return render_template('qod.html', quote = data['contents']['quotes'][0]['quote'], author = data['contents']['quotes'][0]['author'])

@app.route("/bike")
def bike():
    url = urlopen("http://api.citybik.es/v2/networks/smartbike-delhi-delhi")
    response = url.read()
    data = json.loads(response)
    stations = data['network']['stations']
    array = []
    for i in stations:
        array.append(i['name'])
        #array.append("\n")
    print(array)
    print(data['network']['location']['city'], data['network']['name'])
    return render_template('bike.html',
                            city = data['network']['location']['city'],
                            company = data['network']['name'],
                            stations = array
                            )

@app.route("/currency")
def curr():
    url = urlopen("https://api.exchangerate-api.com/v4/latest/CLP")
    response = url.read()
    data = json.loads(response)
    print(data['base'],data['rates']['USD'],data['rates']['EUR'],data['rates']['RUB'],data['rates']['GBP'])
    return render_template('curr.html',
                            main = data['base'],
                            usd = data['rates']['USD'],
                            eur = data['rates']['EUR'],
                            rub = data['rates']['RUB'],
                            gbp = data['rates']['GBP'],

                            )

if __name__ == "__main__":
    app.debug = True
    app.run()
