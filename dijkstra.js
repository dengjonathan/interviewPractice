// Dijkstra's Shortest Path Algorithm for graphs
// finds shortest route from start to finish node in a graph
// start at root, and update all nodes that root has edges to with shortest distance to them
// visit closest, and update with all distances that have edges
const BinaryHeap = require('./binaryHeap');

class Graph {
  constructor() {
    this.edges = {};
  }
  add(val, edges) {
    this.edges[val] = edges;
  }
}

function dijkstra(graph, root, target) {
  const distances = {};
  const previous = {};
  const remaining = new BinaryHeap((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] === b[0]) {
      return 0;
    }
    return 1;
  });

  for (let i in graph.edges) {
    distances[i] = Infinity;
  }
  distances[root] = 0;
  remaining.insert([0, {
    name: root,
    edges: graph.edges[root]
  }]);

  const findPath = name => {
    let current = name;
    const result = [];
    while (current) {
      result.push(current);
      current = previous[current];
    }
    return result;
  }

  while (remaining.size) {
    const nextLoc = remaining.removeRoot();
    const [distance, node] = nextLoc;
    const name = node.name;
    const edges = node.edges;
    if (name === target) {
      return findPath(name).reverse();
    }
    for (let i in edges) {
      if (distance + edges[i] < distances[i]) {
        distances[i] = distances[name] + edges[i];
        previous[i] = name;
        remaining.insert([distances[i], {
          edges: graph.edges[i],
          name: i
        }]);
      }
    }
  }
  return null;
}

// TESTS
const expect = require('chai').expect;
const map = new Graph();

map.add('SEATAC', {
  SF: 2,
  Tucson: 3
});

map.add('SF', {
  LA: 1
});

map.add('LA', {
  SF: 1,
  Tucson: 3
});

map.add('Tucson', {
  SEATAC: 3,
  LA: 3,
  Boston: 5
});

map.add('Boston', {
  Tucson: 5,
  FLL: 2
});

map.add('FLL', {
  Tucson: 9,
  Boston: 2
});
expect(dijkstra(map, 'SEATAC', 'FLL')).to.eql(['SEATAC', 'Tucson', 'Boston', 'FLL']);