import sys

input = sys.stdin.readline


def solution():
    n, k = map(int, input().split())

    temps = list(map(int, input().split()))

    temp = sum(temps[:k])
    answer = temp

    for i in range(0, (n - k)):
        temp -= temps[i]
        temp += temps[i + k]
        answer = max(answer, temp)

    print(answer)


if __name__ == "__main__":
    solution()
