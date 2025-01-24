// @leet start
/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
    const n = graph.length;
    const color = new Array(n).fill(0);
    // 0 = unvisited, 1 = visiting, 2 = safe

    function isSafe(node) {
        if (color[node] > 0) {
            return color[node] == 2;
        }
        color[node] = 1;
        if (!Array.isArray(graph[node])) {
            color[node] = 2
            return true;
        }
        for (const neighbor of graph[node]) {
            if (!isSafe(neighbor)) {
                return false
            }
        }
        color[node] = 2;
        return true;
    }

    const nodes = [];

    for (let i = 0; i < n; i++) {
        if (isSafe(i)) {
            nodes.push(i)
        }
    }

    return nodes;
};
// @leet end
