import sys
from collections import deque


input = sys.stdin.readline


def solution():
    n, m = map(int, input().split())

    island = [[] for _ in range(n + 1)]

    for _ in range(m):
        a, b, c = map(int, input().split())
        island[a].append((b, c))
        island[b].append((a, c))

    f1, f2 = map(int, input().split())

    start = 1
    end = int(1e9)

    while start <= end:
        mid = (start + end) // 2

        if is_possible(f1, f2, island, mid):
            start = mid + 1
        else:
            end = mid - 1
    print(end)


def is_possible(start, destination, island, cost):
    reachable = False

    visited = [False] * (len(island))
    visited[start] = True

    q = deque([start])

    while q:
        current = q.popleft()

        for n, c in island[current]:
            if c < cost:
                continue
            if n == destination:
                reachable = True

            if not visited[n]:
                visited[n] = True
                q.append(n)

    return reachable


if __name__ == "__main__":
    solution()
