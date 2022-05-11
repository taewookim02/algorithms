T = int(input())
myList = list(map(int, input().split()))
for i in range(1, T + 1):
    min = 0
    max = 0
    for i in myList:
        if i > max:
            max = i
        elif i < min:
            min = i
print(min, max)


