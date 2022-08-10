a=1
b=1000
for i in range(a,b+1):
    if( i%7==0 and i%5!=0 ):
	    print(i)


three = [n for n in range(a,b-1) if '6' in str(n)]
print(three)