def solution(string):
  arr = string.split('.')

  for i in range(len(arr)):
    length = len(arr[i])
    if length % 2 > 0:
      return -1
    
    if length % 4 > 0:
      string = 'A' * (length - 2) + 'BB'
    else:
      string = 'A' * length
    arr[i] = string
  
  return '.'.join(arr)

print(solution(input()))