#find factorial of a number
def factorial():
#get input from user
    n=int(input())
    factorial=1
    for i in range(1,n+1):
        factorial=factorial*i
    return factorial
res=factorial()
print(res)
