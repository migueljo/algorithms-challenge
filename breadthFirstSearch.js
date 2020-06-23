const g = {
    you: ["alice", "bob", "claire"],
    bob: ["anuj", "peggy"],
    alice: ["peggy"],
    claire: ["thom", "jonny"],
    anuj: [],
    peggy: [],
    thom: [],
    jonny: [],
}
const alreadyChecked = {}
const queue = []
queue.push(...g.you)

while (queue.length > 0) {
    const node = queue.shift()
    console.log(node)
    // if (alreadyChecked[node]) continue

    if (node[node.length - 1] === "m") {
        console.log(`${node} is a mango seller`)
        break
    } else {
        queue.push(...g[node])
    }

    alreadyChecked[node] = node

    if (queue.length === 0) console.log("no mango seller")
}
