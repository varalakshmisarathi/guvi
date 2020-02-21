#sum of all numbers is divisible by 2, 3 and 5
#get input from user
n=int(input(""))
l=[int(x) for x in input().split()][:n]
#calculate sum
m=sum(l)
if(m%2==0 or m%3==0 or m%5==0):
    print("1")
else:
    print("0")
