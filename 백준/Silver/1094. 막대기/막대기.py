def solution(X):
  length = 64 # 현재 막대의 길이
  cnt = 0     # 사용된 막대의 개수

  while X > 0:
    if X >= length:
      X -= length
      cnt += 1
    length /= 2

  return cnt

print(solution(int(input())))