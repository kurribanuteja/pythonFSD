def time(a):
    if a < 0:
        return 0
    else:
        return a*60


b = int(input("enter an integer: "))
print(str(time(b)) + " secs")