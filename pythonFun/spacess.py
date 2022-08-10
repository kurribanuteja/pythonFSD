def c_Space(string):
    count=0
    for i in range(0,len(string)):
        if string[i]==" ":
            count+=1
    return count
string="Hi my name is banu"
print("the number of spaces in the string is: ",c_Space(string))