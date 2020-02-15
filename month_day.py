#no.of days in month
def month_day(m):
#check month for 31 days
    if(m==1 or m==3 or m==5 or m==7 or m==8 or m==10 or m==12):
     return'31'
#check month for 30 days
    elif(m==4 or m==6 or m==9 or m==11):
     return'30'
#check month for 28 days
    elif(m==2):
     return'28'
    else:
     return'error'
#get input
m=int(input())
n=month_day(m)
print(n,end="")
