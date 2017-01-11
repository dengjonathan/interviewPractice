// implement graphBFS

class GraphNode {
  constructor(val) {
    this.val = val;
    this.vertices = [];
  }
}

const createVertex = (node1, node2) => {
  node1.vertices.push(node2);
  node2.vertices.push(node1);
}

const BFS = (root, target) => {
  const queue = [root];
  while (queue.length){
    const node = queue.shift();
    if (node.val === target) {
      return true;
    }
    node.visited = true;
    node.vertices.filter(vertex => !vertex.visited)
      .forEach(node => queue.push(node));
  }
  return false;
}

const expect = require('chai').expect;

const one = new GraphNode(1);
const [two, three, four, five] = [2,3,4,5].map(val => new GraphNode(val));

createVertex(one, two);
createVertex(one, three);
createVertex(two, four);

expect(BFS(one, 2)).to.equal(true);
expect(BFS(one, 3)).to.equal(true);
expect(BFS(two, 4)).to.equal(true);
expect(BFS(two, 5)).to.equal(false);