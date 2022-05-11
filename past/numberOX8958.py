N = int(input())
myList = []
for i in range(N):
    # myList.append(list(map(str, input().split("\n"))))
    myList.append(input())

score = 0
consecutive = 0

for i in myList:
    for char in i:
        if char == "O":
            consecutive +=1
            score += consecutive * 1
        else:
            consecutive = 0
    print(score)
    score = 0
    consecutive = 0
    

