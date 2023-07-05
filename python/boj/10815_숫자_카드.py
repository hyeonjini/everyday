import sys

input = sys.stdin.readline


def solution():
    N = int(input())  # noqa
    cards = list(map(int, input().split()))
    M = int(input())  # noqa
    numbers = list(map(int, input().split()))

    cards.sort()

    result = []
    for number in numbers:
        result.append(binary_search(cards, number))

    print(" ".join(result))


def binary_search(arr, target):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return "1"
        elif arr[mid] < target:
            left = mid + 1
        elif arr[mid] > target:
            right = mid - 1

    return "0"


if __name__ == "__main__":
    solution()
