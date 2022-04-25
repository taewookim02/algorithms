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
    if i not in compareList:
        compareList.append(i%X)
    else:
        continue
print(compareList)
print(len(compareList))


# https://www.acmicpc.net/problem/3052
