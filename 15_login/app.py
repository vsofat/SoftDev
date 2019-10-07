# Ayham Alnasser & Vishwaa Sofat & Kiran Vuksanaj (Save the Turtles)
# SoftDev pd1
# K15 - Do I Know You?
# 2019-10-02

from flask import Flask, render_template, request, session, redirect, url_for
from data import secret

app = Flask(__name__)
app.secret_key = secret.main()


@app.route('/',methods=["GET","POST"])
def hello():
    # print(request.form)
    if('username' in session):
        return redirect(url_for("alr_log_in"))
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def log_in():
    if 'username' not in session:
        session['username'] = request.form.get('username')
        session['password'] = request.form.get('password')
    if 'admin' == session['username']:
        if 'pass' == session['password']:
            print(session)
            return render_template('welcome.html',
                                   username=session['username'])
        else:
            return "Incorrect Password. If you'd like to reset, too bad"
    else:
        return "Incorrect User"

    return "something went wrong, idk what tho"

@app.route('/login', methods=['GET'])
def alr_log_in():
    return render_template('welcome.html',
                           username=session['username'])

@app.route('/logout',methods=["POST"])
def log_out():
    button = request.form['Log_out']
    if button == 'Log Out':
        session.pop('username')
        session.pop('password')
    print("before url")
    print(url_for("hello"))
    print("after url")
    print(request.form)
    return redirect(url_for("hello"))



if __name__ == '__main__':
    app.debug = True
    app.run()
