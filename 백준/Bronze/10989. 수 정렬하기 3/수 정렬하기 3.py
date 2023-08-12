import sys

N = int(sys.stdin.readline())
arr = [0 for _ in range(10000)]

for i in range(1, N+1):
    arr[int(sys.stdin.readline())-1] += 1

for i in range(10000):
    for j in range(0, arr[i]):
        print(i+1)
