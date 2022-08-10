f=open("file.txt","w")
x=int(input("Enter lines:"))
for i in range(1,x+1):
    f.write("python is object oriented programming language")
    f.write("*_*")
    f.write("\n")
f.close()

f=open("file.txt",'r')

for line in f:
    print(line)

y="python .is .object .oriented"

n=y.split(".")

print(n)