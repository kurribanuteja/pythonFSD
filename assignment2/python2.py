def power(i, j):
    if i == 0 or j == 0:
        return 0
    else:
        return i*j


i, j = input("Enter current and voltage:").split()
print("Power = " + str(power(int(i), int(j))) + "Watts")