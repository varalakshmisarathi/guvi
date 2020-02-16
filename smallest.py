#print smallest number
def smallest():
#get input
 num1=int(input(""))
 num2=int(input(""))
#check num1 is small
 if(num1<num2):
    smallest=num1
#check num2 is small
 elif(num2<num1):
    smallest=num2
##check num3 is small
 else:
  smallest=num3
 return smallest
res=smallest()
print(res)
    
