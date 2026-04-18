# 5
# 3 10 8 6 11
# 4
# 1
# 10
# 3
# 11

# 0
# 4
# 1
# 5

# 3 6 8 10 11

    
        
        
def count_less_equal(arr, A):
    left = 0
    right = len(arr) - 1
    ans = len(arr)   

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] <= A:
            left = mid + 1   
        else:
            ans = mid        
            right = mid - 1  

    return ans

shop = int(input())
str_Sd = sorted(map(int, input().split()))

days = int(input())
last_ans=[]
for _ in range(days):
    A = int(input())
    last_ans.append(count_less_equal(str_Sd, A))
list(map(print, last_ans))
        
    
    

# shop = int(input())
# SD_price = input()
# str_Sd = sorted(map(int,SD_price.split()))

# days = int(input())

# last_ans=[]
# for i in range(days):
#     ans = []
#     A = int(input())
#     for j in str_Sd:
#         if A>=j:
#             ans.append(j)
#         else:
#            break
#     last_ans.append(len(ans))
#     del ans
    
# list(map(print, last_ans))



# # 5
# # 3 10 8 6 11
# # 4
# # 1
# # 10
# # 3
# # 11

# # 0
# # 4
# # 1
# # 5

# # 3 6 8 10 11


# shop = int(input())
# SD_price = input()
# str_Sd = list(map(int,SD_price.split()))
# # str_Sd = SD_price.split()

# # int_Sd = []
# # for i in str_Sd:
# #     int_Sd.append(int(i))
    
# sort_int_sd = sorted(str_Sd)

# days = int(input())

# last_ans=[]
# for i in range(days):
#     ans = []
#     A = int(input())
#     for j in sort_int_sd:
#         if A>=j:
#             ans.append(j)
#         else:
#            break
#     last_ans.append(len(ans))
#     del ans
    
# for k in last_ans:
#     print(k)



