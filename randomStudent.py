import random

KREWES = {'orpheus':['Emily', 'Kevin', 'Vishwaa', 'Eric', 'ray', 'Jesse', 'Tiffany', 'Amanda', 'Junhee', 'Jackie', 'Tyler', 'Emory', 'Ivan', 'Elizabeth', 'Pratham', 'Shaw', 'Eric', 'Yaru', 'Kelvin', 'Hong Wei', 'Michael', 'Kiran', 'Amanda', 'Joseph', 'Tanzim', 'David', 'Yevgeniy'],  'rex':['William', 'Joseph', 'Calvin', 'Ethan', 'Moody', 'Mo', 'Big Mo', 'Peihua', 'Saad', 'Benjamin', 'Justin', 'Alice', 'Hilary', 'Ayham', 'Michael', 'Matthew', 'Jionghao', 'Devin', 'David', 'Jacob', 'Will', 'Hannah', 'Alex'], 'endymion':['Grace', 'Nahi', 'Derek', 'Jun Tao', 'Connor', 'Jason', 'Tammy', 'Albert', 'Kazi', 'Derek', 'Brandon', 'Kenneth', 'Lauren', 'Biraj', 'Jeff', 'Jackson', 'Taejoon', 'Kevin', 'Jude', 'Sophie', 'Henry', 'Coby', 'Manfred', 'Leia', 'Ahmed', 'Winston']}

def randomStudent(team):
    num = random.randint(0,len(KREWES[team])-1)
    return KREWES[team][num]

def testRS():
    teams = list(KREWES.keys())
    for i in range(3):
        team = teams[i]
        print("Testing team " + team)
        out = ""
        contained = True
        for x in range(19):
            s = randomStudent(team)
            out = out + s + ", "
            if s not in KREWES[teams[i]]:
                contained = False
        s = randomStudent(team)
        out = out + s
        print(out)
        if contained:
            print("All items contained in team " + team + "\n")
        else:
            print("Something went wrong- not all items in team  " + team + "\n")

def main():
    name = input("Team name (type 'test' to test the function): ")
    if name == "test":
        testRS()
    elif name in KREWES.keys():
        print(randomStudent(name))
    else:
        print("Not a valid team")

#testRS()
main()
