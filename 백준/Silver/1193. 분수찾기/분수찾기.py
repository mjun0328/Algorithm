def solution(X):
  # 분자와 분모의 합이 같은 분수들의 집합을 그룹으로 칭함

  i = 0 # X번째 분수가 속하는 i번째 그룹
  while True:
    max = int((1 + i) * i / 2) # i번째 그룹의 최대 분수 번호
    if X <= max:
      break
    i += 1

  denominator = max - X + 1 # 분모 계산
  numerator = i + 1 - denominator # 분자 계산

  if i % 2 == 1: # 홀수번째 그룹인 경우 분자와 분모 교환
    denominator, numerator = numerator, denominator

  return str(numerator) + '/' + str(denominator)

print(solution(int(input())))