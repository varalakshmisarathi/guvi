#to print the difference of indices of largest and smallest number.All number are unique.
n=int(input(""))
l=[int(x) for x in input().split()][:n]
x=max(l)
y=min(l)
j=(l.index(x))-(l.index(y))
print(j)
