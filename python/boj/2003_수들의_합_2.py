import sys

input = sys.stdin.readline


def solution():
    answer = 0
    n, m = map(int, input().split())
    arr = list(map(int, input().split()))

    start, end = 0, 1
    total = arr[start] + arr[end]

    while start <= end and end <= n:
        total = sum(arr[start:end])
        if total < m:
            end += 1
        elif total > m:
            start += 1
        else:
            answer += 1
            end += 1

    print(answer)


if __name__ == "__main__":
    solution()
