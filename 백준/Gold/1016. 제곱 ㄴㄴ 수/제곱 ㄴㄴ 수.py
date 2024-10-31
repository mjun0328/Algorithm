def solution(m, M):
  arr = [1] * (M - m + 1)

  # 에라토스테네의 체 원리를 이용하여 제곱수의 배수 제거
  for base in range(1, M):
    if base == 1:
      continue
    if base**2 > M:
      break

    i = (m - 1) // base**2 + 1
    while base**2 * i <= M:
      num = base**2 * i
      if m <= num:
        arr[num - m] = 0 # 제곱수의 배수라면 0으로 전환
      i += 1

  # 제거되지 않은 범위 내의 개수 측정
  cnt = 0
  for i in range(M - m + 1):
    cnt += arr[i]
  return cnt

m, M = map(int, input().split(' '))
print(solution(m, M))