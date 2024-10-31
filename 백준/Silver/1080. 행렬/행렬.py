def solution(N, M, matrixA, matrixB):
  def flip(value):
    return '1' if value == '0' else '0'
  
  # 두 행렬이 같다면 크기 상관 없이 0 반환
  isSame = True
  for row in range(N):
    for col in range(M):
      if matrixA[row][col] != matrixB[row][col]:
        isSame = False
        break
  if isSame:
    return 0
  
  # 크기가 3X3보다 작다면 불가 판정
  if N < 3 or M < 3:
    return -1
  
  cnt = 0
  # 0 ~ N-2행과 0 ~ M-2열을 돌아다니며 두 행렬에서 원소가 다르면 A행렬의 부분행렬 반전
  for row in range(N - 2):
    for col in range(M - 2):
      if matrixA[row][col] != matrixB[row][col]:
        for i in range(3):
          for j in range(3):
            matrixA[row + i][col + j] = flip(matrixA[row + i][col + j])
        cnt += 1

  # matrixD의 모든 원소가 0인지 확인
  for row in range(N - 2, N):
    for col in range(M):
      if matrixA[row][col] != matrixB[row][col]:
        return -1
  for row in range(N - 2):
    for col in range(M - 2, M):
      if matrixA[row][col] != matrixB[row][col]:
        return -1

  return cnt
    

N, M = map(int, input().split(' '))

matrixA, matrixB = [], []
for _ in range(N):
  matrixA.append(list(input()))
for _ in range(N):
  matrixB.append(list(input()))

print(solution(N, M, matrixA, matrixB))