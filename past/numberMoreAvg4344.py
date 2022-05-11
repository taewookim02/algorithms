N = int(input())
myList = []
for i in range(N):
    myList.append(list(map(int, input().split())))

# myList = [myList[0].split("," for item in myList)]
newList = []
for item in myList:
    newList.append(item[0].split(","))

print(myList)

print("\n", newList)

