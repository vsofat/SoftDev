# Jeff Lin & Vishwaa Sofat
# SoftDev PD9
# K10 -- Import/Export Bank
# 2020-03-04

# The Big Bang Theory Episodes

# This dataset contains information about the TV show The Big Bang Theory
# and a list of every episode and their names, broadcasting dates, runtime,
# plot summaries, and more.

# Our import mechanism reads in the json file containing the dataset and
# specifically targets where the list of episodes are located in the dataset
# to insert into the collection.

import pymongo

from pymongo import MongoClient
from bson.json_util import loads
from pprint import pprint

client = MongoClient()
db = client["jishwaa"]

def parse():
	if db.jishwaa.count_documents({}) == 0:
		file = open("big-bang-theory.json","r")
		dictionary = loads(file.read())
		db.jishwaa.insert(dictionary['_embedded']["episodes"])

def getSeason( db, season ):
	print("Episodes in Season {}:".format(season))
	info = db.jishwaa.find( {"season": season} )
	for stuff in info:
		print(str(stuff["number"]) + " - " + stuff["name"])

def getYear( db, year ):
	print("Episodes from {}:".format(year))
	info = db.jishwaa.find( {"airdate": {"$regex": str(year)}} )
	for stuff in info:
		print("S{}E{} - ".format(stuff["season"],stuff["number"]) + stuff["name"])

parse()
print("The Big Bang Theory - TV Show Dataset\n")
getSeason(db,7)
print("")
getYear(db, 2012)
