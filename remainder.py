# (A+B)%C는 ((A%C) + (B%C))%C 와 같을까?

# (A×B)%C는 ((A%C) × (B%C))%C 와 같을까?

# 세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.
# 1/2/3

# 1 = 
# 2 = 
# 3 = 
# 4 = 


A, B, C = map(int, input().split())

print((A+B)%C)
print(((A % C) + (B % C)) % C)
print((A*B)%C)
print(((A%C) * (B%C))%C)