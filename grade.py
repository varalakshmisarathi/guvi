#grade system
mark1=int(input("enter m1:"))
mark2=int(input("enter m2:"))
mark3=int(input("enter m3:"))
avg=(mark1+mark2+mark3)/3
if(avg>=90 and avg<=100):
  print("grade:s")
elif(avg>=70 and avg<=89):
  print("grade:A")
elif(avg>=50 and avg<=69):
  print("grade:B")
elif(avg>=30 and avg<=49):
   print("grade:C")
else:
   print("grade:fail")
