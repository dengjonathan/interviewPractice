// create a function that recursively draws H-Trees to a given depth
// given this helper function
const drawLine = (point1, point2) => {
  // draws line between points 1 and 2
};

const constructHTree = (center, length, depth) => {
  if (depth === 0) {
    return; // finish
  }
  const leftX = center.x - length / 2;
  const rightX = center.x + length / 2;
  const upperY = center.y + length / 2;
  const lowerY = center.y - length / 2;

  // draw horizontal line
  drawLine({x: leftX, y: center.y}, {x: rightX, y: center.y});
  // draw vertical lines
  drawLine({x: leftX, y: upperY}, {x: leftX, y: lowerY});
  drawLine({x: rightX, y: upperY}, {x: rightX, y: lowerY});

  // recursively call on 4 endpoints
  constructHTree({x: leftX, y: upperY}, length / Math.pow(2, 1/2), depth - 1);
  constructHTree({x: leftX, y: lowerY}, length / Math.pow(2, 1/2), depth - 1);
  constructHTree({x: rightX, y: upperY}, length / Math.pow(2, 1/2), depth - 1);
  constructHTree({x: leftX, y: lowerY}, length / Math.pow(2, 1/2), depth - 1);
};