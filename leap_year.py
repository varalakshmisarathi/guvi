# find leap year
def year():
#get input
 year = int(input(""))
 #if year is leap year print Y
 if (( year%400 == 0)or (( year%4 == 0 ) and ( year%100 != 0))):
    print("Y")
 #if year is leap year print Y
 else:
    print("N")
year()
