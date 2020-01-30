

import sqlite 3

db = sqlite3.connect("foot")

c = db.cursor()
c.execute("CREATE TABLE roster (name TEST, userid INTEGER)")

db.commit()

db.close()
