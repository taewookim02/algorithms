# n = input()
# a = 0
# b = 0
# counter = 0

# # for i in n:
# #     counter += 1
# #     if counter == 1:
# #         a = i
# #     else:
# #         b = i

# # newNum = int(a) + int(b)
# # print(newNum)
# # nextNum = b + str(newNum)
# # print(nextNum)

# while True:
#     count = 0
#     for i in n:
#         counter+= 1
#         if counter == 1:
#             a = i
#         else:
#             b = i
#     newNum = int(a) + int(b)
#     nextNum = b + str(newNum)      
#     count += 1

#     if nextNum == n:
#         print(count)
#         break




num = int(input())
check = num
new_num = 0
temp = 0
count = 0
while True:
    temp = num//10 + num%10
    new_num = (num%10)*10 + temp%10
    count += 1
    num = new_num
    if new_num == check:
        break
print(count)