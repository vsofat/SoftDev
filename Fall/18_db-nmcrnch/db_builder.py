#Clement Chan & Amanda Chen
#SoftDev  pd1
#skeleton :: SQLITE3 BASICS
#Oct 10 2019

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="discobandit.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops

#==========================================================

command = "CREATE TABLE IF NOT EXISTS students (name text, age integer, id integer primary key);" # test SQL stmt in sqlite3 shell, save as string
c.execute(command) # run SQL statement

with open('students.csv', newline='') as csvStud:
    reader = csv.DictReader(csvStud)
    for row in reader:
        #print(row['name']+"\n"+row['age']+"\n"+row['id'])
        #print('INSERT INTO students (name, age, id) VALUES (\"'+ row['name'] + '\", ' + row['age'] + ', ' + row['id']+ ');')
        #NEEDS \" AROUND NAME VALUE!!
        command = 'INSERT INTO students (name, age, id) VALUES (\"'+ row['name'] + '\", ' + row['age'] + ', ' + row['id']+ ');'
        #insert dictionary values into table
        c.execute(command)

        


command = "CREATE TABLE IF NOT EXISTS courses (code text, mark integer, id integer);" # test SQL stmt in sqlite3 shell, save as string
c.execute(command)    # run SQL statement



with open('courses.csv', newline='') as csvStud:
    reader = csv.DictReader(csvStud)
    for row in reader:
        command = 'INSERT INTO courses (code, mark, id) VALUES (\"'+ row['code'] + '\", ' + row['mark'] + ', ' + row['id']+ ');'
        c.execute(command)

#==========================================================

db.commit() #save changes
db.close()  #close database


