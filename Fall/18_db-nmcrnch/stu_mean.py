
import sqlite3

def getGrades(idNum):
    command = "SELECT mark FROM courses WHERE courses.id = " + str(idNum) + ";"
    return command

def getAvg(foo):
    counter = 0
    sum = 0;
    for mark in foo:
        sum += mark[0]
        counter+=1
    return sum/counter



db = sqlite3.connect("discobandit.db")

c = db.cursor()
db.execute("CREATE TABLE grades (id,avg)")

gradebook = {}

for i in range (1,11):
    foo = c.execute(getGrades(i))
    gradebook[i] = getAvg(foo)
    c.execute("INSERT INTO grades VALUES (" + str(i) + "," + str(gradebook[i]) + ");")



db.commit()
    
db.close()

for idx in range(1,11):
    print(idx, "  ", gradebook[idx])





