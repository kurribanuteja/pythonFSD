N = 3
def rotate(arr):
    global N
    for i in range(N):
        for j in range(i):
            temp = arr[i][j]
            arr[i][j] = arr[j][i]
            arr[j][i] = temp
    for i in range(N):
        for j in range(int(N/2)):
            temp = arr[i][j]
            arr[i][j] = arr[i][N-j-1]
            arr[i][N-j-1] = temp
arr = [[1, 2, 3],
       [4, 5, 6],
       [7, 8, 9]]
 
rotate(arr)
 
for i in range(N):
    for j in range(N):
        print(arr[i][j], end=" ")
    print()
 