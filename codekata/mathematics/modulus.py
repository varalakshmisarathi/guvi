# print a*b mod c.
def mod():
#get input
    a,b,c=map(int,input().split())
#calculate
    m=(a*b)%c
    return m
res=mod()
print(res)
mod()
