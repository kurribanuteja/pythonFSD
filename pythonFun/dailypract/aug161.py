from typing import List
def twoSum(num: List[int], target: int) -> List[int]:
    for a in range(len(num)):
        for b in range(a+1,len(num)):
            if num[a]+num[b]==target:
                return [a,b]
print(twoSum([1,2,3,4,5,6], 9))