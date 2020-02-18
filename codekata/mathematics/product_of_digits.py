 #print the product of the digits.
 #get input from user
 num=int(input())
temp=num
product=1;
while(temp!=0):
#calculate product
 product=product*(temp%10);
 temp=int(temp/10)
print(product)
