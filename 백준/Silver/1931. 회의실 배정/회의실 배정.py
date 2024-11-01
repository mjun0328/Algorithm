def solution(tasks):
  # 종료 시각이 이른 순, 동 순위에서는 시작 시각이 이른 순으로 정렬
  tasks = sorted(tasks, key=lambda task: (task[1], task[0]))

  cnt = 0  # 진행된 회의의 개수
  time = 0 # 마지막 회의의 종료 시각
  # 이전 회의 시간을 침해하지 않는 선에서 가장 종료 시간이 빠른 회의 선택(회의를 오래 하는 게 아닌 많이 하는 게 중요하기 때문)
  for (start, end) in tasks:
    if time <= start:
      time = end
      cnt += 1
  return cnt


N = int(input())

tasks = []
for _ in range(N):
  tasks.append(list(map(int, input().split(' '))))

print(solution(tasks))