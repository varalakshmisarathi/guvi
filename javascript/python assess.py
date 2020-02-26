#shift
a=list(map(int,input().split()))
n=a[0]
k=a[1]
l=[]
for i in range(2,len(a)):
 l.append(a[i])
t=n-k
s=l[t::1]
print(*s,end=' ')
r=l[0:t:1]
print(*r)

#odd,even
n=int(input())
if n%2==0;
 print("even",end='')
else:
 print("odd",end='')
