// Given a directed graph and two nodes 
// design an algorithm to find wheter there is a path from start to end

class Node {
    constructor(name) {
        this.name = name;
        this.neighbors = [];
    }
}

// Time complexity is Big O(N);
// Space complexity is Big O(N) because we are creating a set;
function checkRoute(start, end) {
    let visited = new Set();

    function isPathHelper(start, end) {
        visited.add(start);
        if (start == end) {
            return true;
        } else {
            for (let i = 0; i < start.neighbors.length; i++) {
                if (!visited.has(start.neighbors[i])) {
                    if (isPathHelper(start.neighbors[i], end)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    return isPathHelper(start, end);
}

let a = new Node("A");
let k = new Node("K");
let b = new Node("B");
let e = new Node("E");
let l = new Node("L");
let s = new Node("S");

a.neighbors.push(k);
l.neighbors.push(a);
k.neighbors.push(b);
k.neighbors.push(a);
k.neighbors.push(e);
s.neighbors.push(a);
s.neighbors.push(k);

console.log(checkRoute(a, b), true);
console.log(checkRoute(a, e), true);
console.log(checkRoute(s, e), true);
console.log(checkRoute(b, a), false);
console.log(checkRoute(s, l), false);