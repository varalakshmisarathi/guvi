#remove whitespace and find length 
def remove_space(a):
#replace remove whitespace
    return a.replace(" ","")
#get input
a=input("")
#call function remove_space
s=remove_space(a)
#find length
print(len(s),end="")
