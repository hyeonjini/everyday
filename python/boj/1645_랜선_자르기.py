import sys

input = sys.stdin.readline


def solution():
    K, N = map(int, input().split())

    lines = []

    for _ in range(K):
        lines.append(int(input()))

    left = 1
    right = max(lines)

    while left <= right:
        mid = (left + right) // 2

        if is_possible(mid, lines, N):
            left = mid + 1
        else:
            right = mid - 1

    print(right)


def is_possible(length, lines, target):
    total = 0

    for line in lines:
        total += line // length

    return total >= target


if __name__ == "__main__":
    solution()
