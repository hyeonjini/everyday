import sys


input = sys.stdin.readline


def solution():
    answer = 1e9
    n, s = map(int, input().split())

    arr = list(map(int, input().split()))

    start, end = 0, 0

    ac = arr[0]

    while True:
        if ac < s:
            end += 1
            if end == n:
                break
            ac += arr[end]
        else:
            ac -= arr[start]
            answer = min(answer, end - start + 1)
            start += 1

    answer = 0 if answer == 1e9 else answer
    print(answer)


if __name__ == "__main__":
    solution()
