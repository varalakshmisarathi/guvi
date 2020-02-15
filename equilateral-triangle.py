#area of equilateral triangle 
import math
def equarea():
#get side of triangle
    side=int(input())
#calculate area
    area=(math.sqrt(3)/4)*(side*side)
    return area
res=equarea()
print(res)
