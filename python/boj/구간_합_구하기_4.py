import sys


input = sys.stdin.readline


def solution():
    n, m = map(int, input().split())

    arr = list(map(int, input().split()))
    dp = [0] * (n + 1)

    for i in range(n):
        dp[i + 1] = dp[i] + arr[i]
    result = []

    for _ in range(m):
        start, end = map(int, input().split())
        result.append(dp[end] - dp[start-1])
    print("\n".join(map(str, result)))


if __name__ == "__main__":
    solution()
