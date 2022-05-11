# A, B, C 
A = int(input())
B = int(input())
C = int(input())
num = A*B*C

# listing the string
myList = list(str(num))

# make a record
compareList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

for i in myList:
    i = int(i)
    if i == 0:
        compareList[0] += 1
    elif i == 1:
        compareList[1] += 1
    elif i == 2:
        compareList[2] += 1
    elif i == 3:
        compareList[3] += 1
    elif i == 4:
        compareList[4] += 1
    elif i == 5:
        compareList[5] += 1
    elif i == 6:
        compareList[6] += 1
    elif i == 7:
        compareList[7] += 1
    elif i == 8:
        compareList[8] += 1
    elif i == 9:
        compareList[9] += 1
    else:
        break


for i in compareList:
    print(i)

