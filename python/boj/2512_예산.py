import sys

input = sys.stdin.readline


def solution():
    n = int(input())

    arr = list(map(int, input().split()))

    budget = int(input())

    start = 0
    end = max(arr)

    while start <= end:

        mid = (start + end) // 2

        if is_possible(budget, arr, mid):
            start = mid + 1
        else:
            end = mid - 1

    print(end)


def is_possible(budget, arr, alloc):
    total = 0
    for a in arr:
        total += alloc if alloc < a else a

    return total <= budget


if __name__ == "__main__":
    solution()
