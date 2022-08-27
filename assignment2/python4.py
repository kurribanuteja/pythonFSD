import numpy as n


def countT(arr):
    return n.sum(arr)


arr = n.array([True, False, True])
print(countT(arr))