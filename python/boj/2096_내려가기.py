import sys


input = sys.stdin.readline


def solution():
    n = int(input())

    max_dp = [0, 0, 0]
    min_dp = [0, 0, 0]

    for _ in range(n):
        a, b, c = map(int, input().split())

        max_dp = [max(max_dp[:2]) + a, max(max_dp) + b, max(max_dp[1:]) + c]
        min_dp = [min(min_dp[:2]) + a, min(min_dp) + b, min(min_dp[1:]) + c]

    print(max(max_dp), min(min_dp))


if __name__ == "__main__":
    solution()
