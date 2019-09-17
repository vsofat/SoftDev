import csv
import random

# csv library makes reading the csv we have easier because there are "," in various spots and we can not simply split along the ","

with open('occupations.csv') as csv_file:
    read = csv.reader(csv_file, delimiter = ",")
    dict = {}
    l = 0
    for row in read:
        if l == 0:
            dict[row[0]] = float(row[1]) * 10
            placeHolder = row[0]
            l = l + 1
        else:
            dict[row[0]] = (float(row[1]) * 10) + (dict[placeHolder])
            placeHolder = row[0]
            l = l + 1

print dict
