A = int(input())
B = int(input())
C = int(input())
D = int(input())
E = int(input())
H = int(input())
F = int(input())
G = int(input())
I = int(input())
J = int(input())

X = 42

myList = [A, B, C, D, E, F, G, H, I, J]

compareList = []
for i in myList:
    compareList.append(i%X)


# for i in myList:
#     if i in compareList:
#         continue
#     else:
#         compareList.append(i%X)
lastList = set(compareList)

print(len(lastList))
