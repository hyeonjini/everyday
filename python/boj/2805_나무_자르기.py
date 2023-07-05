import sys


input = sys.stdin.readline


def main():
    N, M = map(int, input().split())

    trees = list(map(int, input().split()))

    left = 1
    right = max(trees)

    while left <= right:
        mid = (left + right) // 2

        if is_possible(mid, trees, M):
            left = mid + 1

        else:
            right = mid - 1

    print(right)


def is_possible(height, trees, M) -> bool:
    total = 0

    for tree in trees:
        if tree > height:
            total += tree - height

    return total >= M


if __name__ == "__main__":
    main()
