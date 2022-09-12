import mysql.connector

myDb=mysql.connector.connect(host="127.0.0.1", user="root", 
password="B@nu1234",database="sql_store")

myCursor=myDb.cursor()

#selectCommand="SELECT first_name, last_name FROM orders o JOIN customers c ON o.customer_id=c.customer_id"
#selectCommand = "CREATE TABLE APPuSER (id int, username text, password text)"
appUser = [(1, "banu", "123"), (2, "praveen", "1bgerbbb23"), (3, "chai", "1rger23"), (4, "bharath", "1ewfew23"), (5, "surya", "12vev3"), (6, "harish", "12dsc3")]
insertQ = "INSERT INTO appUser VALUES (%s, %s, %s)"

#myCursor.execute(insertQ, appUser)
myCursor.executemany(insertQ, appUser)
#result=myCursor.fetchall()
#for row in result:
#    print(f"{row[0]} {row[1]}")
myDb.commit()
myDb.close()