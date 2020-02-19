#check if the sum of the digits is a Palindrome. Print 'yes' or 'no' accordingly.
#get input from user
n=int(input())
tem=n
rev=0
sum=0
#execute the statement until comdition is true
while(n>0):
    rem=n%10
#find sum of digits
    sum=sum+rem
#find palindrome
    rev=rev*10+rem
    n=n//10
#check palindrome
if(tem==rev):
    print("yes")
else:
    print("no")
