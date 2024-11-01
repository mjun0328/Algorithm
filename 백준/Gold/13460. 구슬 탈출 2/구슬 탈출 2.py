def solution(maps, N, M):
  obby = ['R', 'B', '#'] # 장애물
  delta = [(0, -1), (1, 0), (0, 1), (-1, 0)] # 이동 방향에 따른 좌표 변화값(위: 0, 오른쪽: 1, 아래: 2, 왼쪽: 3)
  opposite = [2, 3, 0, 1] # 반대 방향(1(왼쪽)이라면 3(오른쪽)을 가리킴)

  # 판 기울여 특정 구슬 움직이기
  def roll(maps, position, direction):
    (x, y) = position
    deltaD = delta[direction]
    while maps[y + deltaD[1]][x + deltaD[0]] not in obby: # 장애물이 없을 때까지 굴러가기
      x += deltaD[0]
      y += deltaD[1]
      if maps[y][x] == 'O':
        return True # 구멍에 빠지면 True 반환
    return (x, y) # 굴러간 후의 좌표 반환
  
  # 파란 구슬이 먼저 굴러가야 하는가
  def isBlueFirst(red, blue, direction):
    deltaD = delta[direction]
    axis = 1 if deltaD[0] == 0 else 0 # 이동하는 축(x좌표가 이동하면 0, y좌표가 이동하면 1)
    anti_axis = 1 if axis == 0 else 0 # 이동하지 않는 축(이동하는 축의 반대)

    if red[anti_axis] == blue[anti_axis]: # 이동하지 않는 축의 좌표가 같은가
      if (blue[axis] - red[axis]) * deltaD[axis] > 0: # 이동하는 축에서 파란 구슬이 우위에 있는가
        # 두 구슬 사이에 장애물이 있어도 어느 구슬을 먼저 굴려도 무관하기에 장애물이 있든 없든 파란 구슬을 먼저 굴려야 하도록 반환
        return True # 파란 구슬을 먼저 굴려야 함
      else:
        return False
    return False

  # 두 구슬의 좌표를 구하고 맵에서 R과 B 지우기
  for row in range(N):
    for col in range(M):
      if maps[row][col] == 'R':
        red = (col, row)
        maps[row][col] = '.'
      elif maps[row][col] == 'B':
        blue = (col, row)
        maps[row][col] = '.'
  
  # 갈림길에서 이동할 수 있는 선택지가 쌓일 큐 (BFS 목적)
  # 기울인 횟수(cnt), 빨간 구슬 좌표(red), 파란 구슬 좌표(blue), 직전에 이동했던 방향(prev)
  queue = [{'cnt': 1, 'red': red, 'blue': blue, 'prev': 5}]

  # 큐를 통해 BFS 수행
  while queue:
    item = queue.pop(0)

    # 네 방향에 대해 기울이기 시도
    for direction in range(4):
      # 직전에 왔던 방향으로 기울이지 않기
      if item['cnt'] > 1 and direction == opposite[item['prev']]:
        continue

      if isBlueFirst(item['red'], item['blue'], direction):
        # 파란 구슬 먼저 이동
        blueNew = roll(maps, item['blue'], direction)
        if blueNew == True: # 파란 구슬이 빠지면 다음 큐로 건너뛰기
          continue
        maps[blueNew[1]][blueNew[0]] = 'B'
        redNew = roll(maps, item['red'], direction)
        if redNew != True:
          maps[blueNew[1]][blueNew[0]] = '.'
      else:
        # 빨간 구슬 먼저 이동
        redNew = roll(maps, item['red'], direction)
        maps[item['red'][1]][item['red'][0]] = '.'
        if redNew != True: # 빨간 구슬이 빠지더라도 파란 구슬도 빠지면 실패이기에 성공 판정 보류
          maps[redNew[1]][redNew[0]] = 'R'
        blueNew = roll(maps, item['blue'], direction)
        if redNew != True:
          maps[redNew[1]][redNew[0]] = '.'

      if blueNew == True:
        continue
      if redNew == True:
        return item['cnt'] # 성공 - BFS이므로 가장 빨리 성공할 때가 최소 시도 횟수
      if item['cnt'] < 10 and not (red[0] == redNew[0] and red[1] == redNew[1] and blue[0] == blueNew[0] and blue[1] == blueNew[1]): # 시도 횟수가 9회 이하이고 두 구슬 중 하나라도 이동했다면 큐 추가
        queue.append({'cnt': item['cnt'] + 1, 'red': redNew, 'blue': blueNew, 'prev': direction})
  return -1 # 10회 이상의 모든 경우의 수를 시도했음에도 성공한 적이 없는 경우 불가 판정

N, M = map(int, input().split(' '))

maps = []
for _ in range(N):
  maps.append(list(input()))

print(solution(maps, N, M))