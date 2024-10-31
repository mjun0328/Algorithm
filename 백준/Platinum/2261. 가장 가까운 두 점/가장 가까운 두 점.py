def solution(points, N):
  def getDistance(p1, p2):
    return (p1[0] - p2[0])**2 + (p1[1] - p2[1])**2

  def closetPair(points, start, end):
    cnt = end - start + 1
    if cnt == 2:
      return getDistance(points[start], points[end])
    elif cnt == 3:
      p1 = points[start]
      p2 = points[start + 1]
      p3 = points[end]
      d1 = getDistance(p1, p2)
      d2 = getDistance(p2, p3)
      d3 = getDistance(p3, p1)
      return min(d1, d2, d3)
    else:
      border = start + cnt // 2 # 왼쪽 부분과 오른쪽 부분의 경계점
      left_min = closetPair(points, start, border)
      right_min = closetPair(points, border, end)
      distance = min(left_min, right_min)

      # 중간 구역의 범위 찾기
      middleL = border
      while middleL >= start and (points[border][0] - points[middleL][0])**2 < distance:
        middleL -= 1
      middleR = border + 1
      while middleR <= end and (points[middleR][0] - points[border][0])**2 < distance:
        middleR += 1
      
      middleL += 1
      middleR -= 1
      middleCnt = middleR - middleL + 1
      middle = sorted(points[middleL:middleR+1], key=lambda point: point[1])

      # 중간 구역 점의 쌍 중 가장 짧은 거리로 distance 업데이트
      for i in range(middleCnt - 1):
        p1 = middle[i]
        for j in range(i + 1, middleCnt):
          p2 = middle[j]
          if (p2[1] - p1[1])**2 > distance:
            break
          else:
            distance = min(distance, getDistance(p1, p2))

      return distance
    
  points = sorted(points, key=lambda point: point[0])
  return closetPair(points, 0, N-1)

N = int(input())

arr = []
for _ in range(N):
  arr.append(list(map(int, input().split(' '))))

print(solution(arr, N))