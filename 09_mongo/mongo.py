# Nahi Khan and Vishwaa Sofat
# SoftDev1 pd9
# K#09 -- Yummy Mongo Py
# 2020-02-27

import json
import sys
from pymongo import MongoClient


client = MongoClient("mongodb://localhost:27017/")

db = client["test"]

collection = db["restaurant"]


insert = {"name":"mood", "info":{"zip":345345, "rating":5}}

# collection.insert_one(insert)


f = open("primer-dataset.json", "r")

def db_populate():
    for line in f:
        l = line.replace("$date", "date")
        j = json.loads(l)
        collection.insert_one(j)

def query_borough(borough):
    query = {"borough":borough}

    result = collection.find(query)

    out = []
    for x in result:
        out.append(x)
    return out


def query_zip(zip):
    query = {"address.zipcode":zip}

    result = collection.find(query)

    out = []
    for x in result:
        out.append(x)
    return out

def query_zip_grade(zip, grade):
    query = {"address.zipcode":zip}

    result = collection.find(query)
    out = []

    for restaurant in result:
        print(restaurant["name"])
        for singlegrade in restaurant["grades"]:
            bad = False
            if (not (singlegrade["grade"] == "Not Yet Graded") and ord(singlegrade["grade"]) <= ord(grade)):
                pass
            else:
                bad = True
        if (not bad):
            out.append(restaurant)

        print("\n")
        print("\n")
        return out



out = query_zip_grade("11423", "A")
