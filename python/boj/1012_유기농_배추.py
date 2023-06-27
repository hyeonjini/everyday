import sys
from collections import deque

input = sys.stdin.readline


def main():
    T = int(input())

    for _ in range(T):
        M, N, K = map(int, input().split())

        field = [[0] * N for _ in range(M)]

        for _ in range(K):
            x, y = map(int, input().split())
            field[x][y] = 1

        print(count_mess(field))


def count_mess(field):
    visited = [[False] * len(field[0]) for _ in range(len(field))]

    mess = 0

    for i in range(len(field)):
        for j in range(len(field[0])):

            if field[i][j] and not visited[i][j]:

                q = deque([(i, j)])
                visited[i][j] = True

                while q:
                    x, y = q.popleft()

                    for nx, ny in ((1, 0), (0, 1), (-1, 0), (0, -1)):
                        dx, dy = x + nx, y + ny

                        if (
                                dx >= len(field) or
                                dx < 0 or
                                dy >= len(field[0]) or
                                dy < 0):
                            continue
                        if field[dx][dy] and not visited[dx][dy]:
                            visited[dx][dy] = True
                            q.append((dx, dy))

                mess += 1

    return mess


if __name__ == "__main__":
    main()
