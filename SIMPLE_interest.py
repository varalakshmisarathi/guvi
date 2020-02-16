#find simple interest
def SI():
#get input
 P = float(input(""))
 N = float(input(""))
 R = float(input(""))
#calculate simple interest
 SI = (P * N * R)/100
 return SI
res=SI()
print(round(res),end="")
