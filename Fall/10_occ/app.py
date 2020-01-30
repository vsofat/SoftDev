#Amber Chen & Vishwa Sofat
#SoftDev1 pd1
#K10 -- NO-body expects the Spanish Inquisition!
#2019-09-11

import random

from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def hello_world():
    print(__name__)
    return ("Welcome")

#long string for description of webpage
description = "The following table shows data from a CSV file containing information about occupations in the United States. The first item is the name of the occupation and the second is the percentage of the U.S. workforce it comprises.\nThe Random Occupation Selector returns an occupation based of the weighted percentages."

@app.route("/occupyflaskst")
def occupier():
    return render_template('occupyflaskst.html',
        tab = "Occupations Table", #name displayed on tab
        titulo = "Occupations", #main title
        team = "Team Silencio Pd1",
        descrip = description,
        randocc = randomOcc(),
        occList = fNewList)

#opening file
f = open("occupations.csv","r")

#storing file into large string
fString = f.read()

#spliting string into array with name and percentage as an element
fList = fString.split('\n')

#creating new array with each element as an array with name and percentage
fNewList = []
for s in fList:
    fNewList.append(s.rsplit(',',2))

#removing uneeded lines
fNewList = fNewList[1:-2]
print(fNewList)

def randomOcc():
    r = random.randint(1, 998) / 10.0 #getting random int ftom 0.1 to 99.8
    #print("random num: " + str(r))
    for o in fNewList:
        r -= float(o[1]) #subtracing percentages from random int until
        if (r <= 0):        #it reaches 0 or lower
            return o[0]


if __name__ == "__main__":
    app.debug = True
    app.run()
