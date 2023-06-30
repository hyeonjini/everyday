package boj.bfs

import java.util.*

/**
 * ## 문제
 * 그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오.
 * 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다. 정점 번호는 1번부터 N번까지이다.
 *
 * ## 입력
 * 첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 탐색을 시작할 정점의 번호 V가 주어진다.
 * 다음 M개의 줄에는 간선이 연결하는 두 정점의 번호가 주어진다. 어떤 두 정점 사이에 여러 개의 간선이 있을 수 있다. 입력으로 주어지는 간선은 양방향이다.
 *
 * ## 출력
 * 첫째 줄에 DFS를 수행한 결과를, 그 다음 줄에는 BFS를 수행한 결과를 출력한다. V부터 방문된 점을 순서대로 출력하면 된다.
 */

fun main() {
    val reader = System.`in`.bufferedReader()
    val (node, edge, start) = reader.readLine().split(" ").map { it.toInt() }

    val graph = List(node + 1) { mutableListOf<Int>() }

    repeat(edge) {
        val (x: Int, y: Int) = reader.readLine().split(" ").map { it.toInt() }
        graph[x].add(y)
        graph[y].add(x)
    }.also {
        graph.forEach { it.sort() }
    }

    println(dfs(graph, start, MutableList(node + 1) { false }).trimEnd())
    println(bfs(graph, start, MutableList(node + 1) { false }).trimEnd())
}

fun dfs(graph: List<List<Int>>, node: Int, visited: MutableList<Boolean>): String {
    val sb = StringBuilder()

    visited[node] = true
    sb.append("$node ")

    graph[node].forEach {
        if (!visited[it])
            sb.append(dfs(graph, it, visited))
    }

    return sb.toString()
}

fun bfs(graph: List<List<Int>>, node: Int, visited: MutableList<Boolean>): String {
    val sb = StringBuilder()
    val queue: Queue<Int> = LinkedList()

    queue.offer(node)
    visited[node] = true

    while (!queue.isEmpty()) {
        val value = queue.poll()
        sb.append("$value ")

        graph[value].forEach {
            if (!visited[it]) {
                queue.offer(it)
                visited[it] = true
            }
        }
    }

    return sb.toString()
}
