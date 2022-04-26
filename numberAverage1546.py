# N = int(input())
# myList = list(input().split())

# M = int(max(myList))
# newList = []
# for i in myList:
#     newList.append(int(i)/M*100)

# print("%.2f" %(sum(newList)/len(newList)))


# https://www.acmicpc.net/problem/1546
# https://codingdog.tistory.com/entry/백준에서-자주-보이는-절대-오차-상대-오차에-대해-간단하게-알아봅시다

N = int(input())
M = list(map(int, input().split()))
max_ = max(M)

for i in range(N):
    M[i] = M[i]/max_*100
print("%.2f" %(sum(M)/N))


