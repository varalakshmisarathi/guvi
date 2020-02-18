#check whether it is prime or not.Print 'yes' if it is prime else print 'no'.
#take input from user
n=int(input()) 
#check whether number greater than1
if(n>>1):
    for i in range(2,n):
        if(n%1==0):
            print("no")
            break
    else:
        print("yes")
else:
    print("yes")
        
