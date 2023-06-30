import sys

input = sys.stdin.readline


def main():
    N, M, V = map(int, input().split())

    graph = [[] for _ in range(N + 1)]

    for _ in range(M):
        n, m = map(int, input().split())
        graph[n].append(m)
        graph[m].append(n)

    for item in graph:
        item.sort()

    result_dfs = dfs(graph, V)
    result_bfs = bfs(graph, V)

    print(" ".join(map(str, result_dfs)))
    print(" ".join(map(str, result_bfs)))


def dfs(graph, start):

    visited = []

    stack = [start]

    while stack:
        vertex = stack.pop()

        if vertex not in visited:
            visited.append(vertex)
            stack.extend(graph[vertex])

    return visited


def bfs(graph, start):

    result = []

    visited = [False] * (len(graph))
    visited[start] = True

    q = [start]

    while q:
        vertex = q.pop(0)
        for neighbor in graph[vertex]:
            if not visited[neighbor]:
                q.append(neighbor)
                visited[neighbor] = True

        result.append(vertex)

    return result


if __name__ == "__main__":
    main()
