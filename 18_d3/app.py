# NoBrim
# Joseph Yusufov
# Ahmed Sultan
# Vishwaa Sofat
# 2020-04-22

from flask import Flask
from flask import render_template
from flask import request
import urllib
import os
import json

app = Flask(__name__) #create instance of class Flask
app.secret_key = os.urandom(24)


# with open('static/credentials.csv') as csv_file:  # open CSV file
#     # instantiate CSV reader object
#     csv_reader = csv.reader(csv_file, delimiter=',')
#     line_count = 0  # make sure header isn't included in dictionary
#     # print(csv_reader)
#     for row in csv_reader:  # populate dictionary with keys and values
#         if(line_count == 0):
#             line_count += 1
#         else:
#             CREDENTIALS[row[0]] = row[1]
# # print(CREDENTIALS)

@app.route('/')  #  Login Page
def index():
    # u = urllib.request.urlopen('https://data.cityofnewyork.us/api/views/ihfw-zy9j/rows.json?accessType=DOWNLOAD')
    # response = u.read()
    # data = json.loads(response)
    return render_template('index.html')

if __name__ == "__main__":
    app.debug = True
    app.run()
