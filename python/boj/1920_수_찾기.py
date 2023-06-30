"""
    1. sort A
    2. iter for given and find element of given from A with binaray search
"""

import sys

input = sys.stdin.readline


def main():
    N = int(input())  # noqa
    A = list(map(int, input().split()))
    M = int(input())  # noqa
    given = list(map(int, input().split()))

    A.sort()
    for i in given:
        print(binary_search(A, i))


def binary_search(arr, target):
    left = 0
    right = len(arr) - 1

    mid = len(arr) // 2

    while left <= right:
        if arr[mid] == target:
            return 1

        if target > arr[mid]:
            left = mid + 1
            mid = (right + left) // 2

        elif target < arr[mid]:
            right = mid - 1
            mid = (right + left) // 2

    return 0


if __name__ == "__main__":
    main()
