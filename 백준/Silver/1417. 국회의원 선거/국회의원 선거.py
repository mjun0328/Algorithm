def solution(candicate, N):
  cnt = 0
  while True:
    # 가장 지지자가 많은 후보 찾기(같은 경우 뒷 번호 후보 선택)
    maxIdx = 0
    for i in range(1, N):
      if candicate[maxIdx] <= candicate[i]:
        maxIdx = i

    if maxIdx == 0:
      break # 다솜의 지지자가 가장 많음
    else:
      candicate[0] += 1
      candicate[maxIdx] -= 1
      cnt += 1
  return cnt

N = int(input())

arr = []
for _ in range(N):
  arr.append(int(input()))

print(solution(arr, N))