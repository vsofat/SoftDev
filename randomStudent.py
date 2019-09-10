import random

KREWES = { 'o': ['Shaw', 'Sofat', 'a', 'b'], 'r': ['Emory', 'Walsh', 'hello'], 'e':['Kiran' , 'Vaksunaj', 'brown']}

def randomStudent (team):
    num = random.randint(0,len(KREWES[team])-1)
    return KREWES[team][num]

print (randomStudent('o'))
print (randomStudent('r'))
print (randomStudent('e'))
