#find the largest integer present in the string.
def Maximum(x): 
    num=0 
    res =0
#start traversing
    for i in range(len(x)): 
          
        if x[i] >= "0" and x[i] <= "9": 
            num = num * 10 + int(int(x[i]) - 0) 
        else: 
            res = max(res, num) 
            num = 0
          
    return max(res, num) 
x = input("")
  
print(Maximum(x))
