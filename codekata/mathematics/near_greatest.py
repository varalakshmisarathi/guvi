 #find the nearest greater multiple of 10
 #take input from user
num=int(input())
temp=num
product=1;
while(temp!=0):
    product=product*(temp%10);
#remove last digit from temp
    temp=int(temp/10)
print(product)
