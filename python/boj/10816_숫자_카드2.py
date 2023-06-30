"""
    1. sort cards
    2. iter for given
    3. find left index of element.
    4. find right index of element.
    5. get difference from left, right
"""

import sys
import bisect

input = sys.stdin.readline


def main():
    N = int(input())  # noqa
    cards = list(map(int, input().split()))
    M = int(input())  # noqa
    given = list(map(int, input().split()))

    cards.sort()
    answer = []

    for i in given:
        left = bisect.bisect_left(cards, i)
        right = bisect.bisect_right(cards, i)
        answer.append(right - left)

    print(" ".join(map(str, answer)))


if __name__ == "__main__":
    main()
