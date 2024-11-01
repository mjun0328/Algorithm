def solution(N, arr):
  ALPHABET = ['a', 'b', 'k', 'd', 'e', 'g', 'h', 'i', 'l', 'm', 'n', 'ng', 'o', 'p', 'r', 's', 't', 'u', 'w', 'y']

  # 각 단어들의 알파벳들을 (민식어 기준의) 알파벳 순서로 변환
  for i in range(N):
    word = arr[i]
    order = []
    length = len(word)

    j = 0
    while j < length:
      if j < length - 1 and word[j] == 'n' and word[j+1] == 'g':
        order.append(11) # ng는 하나의 알파벳(11번째)으로 취급
        j += 2
      else:
        order.append(ALPHABET.index(word[j]))
        j += 1

    arr[i] = {'order': order, 'word': word}


  # a가 b보다 우선인지 비교
  def compare(a, b):
    for i in range(min(len(a), len(b))):
      if a[i] < b[i]:
        return True
      elif a[i] > b[i]:
        return False
    return len(a) < len(b)
      
  # 퀵 정렬
  def quickSort(arr):
    length = len(arr)
    if length < 1:
      return arr
    else:
      pivot = arr[0]
      left, right = [], []
      for i in range(1, length):
        if compare(arr[i]['order'], pivot['order']):
          left.append(arr[i])
        else:
          right.append(arr[i])
      return quickSort(left) + [pivot] + quickSort(right)
    
  # 단어들을 알파벳 순서로 정렬
  arr = quickSort(arr)

  result = []
  for item in arr:
    result.append(item['word'])
  return result


N = int(input())

arr = []
for _ in range(N):
  arr.append(input())

for word in solution(N, arr):
  print(word)