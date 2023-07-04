package boj.bfs

import java.util.*

/**
 * ## 문제
 * N×M 크기의 배열로 표현되는 미로가 있다.
 *
 * 1    0	1	1	1	1
 * 1	0	1	0	1	0
 * 1	0	1	0	1	1
 * 1	1	1	0	1	1
 *
 * 미로에서 1은 이동할 수 있는 칸을 나타내고, 0은 이동할 수 없는 칸을 나타낸다.
 * 이러한 미로가 주어졌을 때, (1, 1)에서 출발하여 (N, M)의 위치로 이동할 때 지나야 하는 최소의 칸 수를 구하는 프로그램을 작성하시오.
 * 한 칸에서 다른 칸으로 이동할 때, 서로 인접한 칸으로만 이동할 수 있다.
 *
 * 위의 예에서는 15칸을 지나야 (N, M)의 위치로 이동할 수 있다. 칸을 셀 때에는 시작 위치와 도착 위치도 포함한다.
 *
 * ## 입력
 * 첫째 줄에 두 정수 N, M(2 ≤ N, M ≤ 100)이 주어진다. 다음 N개의 줄에는 M개의 정수로 미로가 주어진다. 각각의 수들은 붙어서 입력으로 주어진다.
 *
 * ## 출력
 * 첫째 줄에 지나야 하는 최소의 칸 수를 출력한다. 항상 도착위치로 이동할 수 있는 경우만 입력으로 주어진다.
 */

fun main() {
    val reader = System.`in`.bufferedReader()
    val (n, m) = reader.readLine().split(" ").map { it.toInt() }

    // 이동 가능한 방향 정의
    val directions = listOf(Pair(0, 1), Pair(0, -1), Pair(1, 0), Pair(-1, 0))
    // 미로 표현 배열
    val graph = Array(n) { intArrayOf() }
    // 이동 비용 저장 배열
    val cost = Array(n) { IntArray(m) { Int.MAX_VALUE } }

    repeat(n) { graph[it] = reader.readLine().toCharArray().map { num -> num.digitToInt() }.toIntArray() }

    // BFS 시작
    val queue: Queue<Pair<Int, Int>> = LinkedList()

    // 시작 지점 0,0 지정 및 시작 지점 비용 1으로 초기화
    queue.offer(Pair(0, 0))
    cost[0][0] = 1

    while (!queue.isEmpty()) {
        val (first, second) = queue.poll()

        directions.forEach { direction ->
            val newFirst = first + direction.first
            val newSecond = second + direction.second

            // 좌표 범위가 넘어갈 경우 continue 처리
            if (newFirst !in 0 until n || newSecond !in 0 until m)
                return@forEach

            if (graph[newFirst][newSecond] == 1)
                if (cost[first][second] + 1 < cost[newFirst][newSecond]) {
                    queue.offer(Pair(newFirst, newSecond))
                    cost[newFirst][newSecond] = cost[first][second] + 1
                }
        }
    }

    print(cost[n - 1][m - 1])
}
