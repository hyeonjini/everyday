"""
    1. create visited table.
    2. iter for vertex.
        2.1 if not visited for a vertex, start searching.
        2.2 end with increasing answer.
    3. repeat 2
"""
import sys
from collections import deque

input = sys.stdin.readline


def main():
    answer = 0

    N, M = map(int, input().split())

    graph = [[] for _ in range(N + 1)]
    for _ in range(M):
        u, v = map(int, input().split())
        graph[u].append(v)
        graph[v].append(u)

    visited = [False] * (N + 1)

    for vertex in range(1, N + 1):
        if not visited[vertex]:
            visited[vertex] = True
            q = deque([vertex])

            while q:
                v = q.popleft()

                for neigbor in graph[v]:
                    if not visited[neigbor]:
                        q.append(neigbor)
                        visited[neigbor] = True

            answer += 1

    print(answer)


if __name__ == "__main__":
    main()
