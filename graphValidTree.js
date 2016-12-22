/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    
};

const createTree = edges => {
  while (edges.length) {
    const node = edges[0][0];
    const adjacencies = [];
    edges.forEach((edge, index) => {
      if (edge[0] === node) {
        adjacencies.push(edges.splice(index, 1));
      }
    })
  }
}