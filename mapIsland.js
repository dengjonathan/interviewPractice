const countIslands = (mapStr, row = 0, occupied = []) => {
  const mapRow = [...mapStr.split('\n')[row]];
  const rightUp = (row, index) => row[index + 1] === '0' && occupied.indexOf(index + 1) > -1;
  const newIslands = mapRow.reduce((total, spot, index, row) => {
    if (spot === '0' && occupied.indexOf(index) === -1 && row[index - 1] !== '0' && !rightUp(row, index)) {
      return total + 1;
      //destroy island
      newMapStr = destroyIsland(newMapStr);
    }
    return total;
  }, 0);
  console.log(newIslands);
  //find occupied and number base case
  if (row === mapStr.split('\n').length - 1) 
    return newIslands;
  const newOccupied = mapRow.reduce((total, space, index) => space === '0'
    ? [
      ...total,
      index
    ]
    : total, []);
  return newIslands + countIslands(newMapStr, row + 1, newOccupied);
};

const destroyIsland = (map, index) => {
  // while island to right or down
    //turn to .
    //look right or down

}

//jamie
function countIslands (mapStr) {
  var count = 0;
  var map = mapStr.split('\n').map(function(row) {
    return row.split('');
  });


  // iterate over map
  for(var i = 0; i < map.length; i++) {
    for(var j = 0; j < map[i].length; j++) {
      // if current value is an island
      if(isIsland(map[i][j])) {
        // increase count by 1
        count++;
        // sink island, starting with current position
        sinkIsland(map, i, j);
      }
    }
  }
  return count;
}

function isIsland(section) {
  return section === '0';
}


function sinkIsland(map, i, j) {
  // if we’re out of bounds OR if we hit water
  if (i < 0 || j < 0 || i >= map.length ||
    j >= map[i].length ||
    !isIsland(map[i][j]) ) {
      return;
  }


  // sink it!
  map[i][j] = '.';


  // move one step in all directions & sinkIsland
  sinkIsland(map, i-1, j);
  sinkIsland(map, i+1, j);
  sinkIsland(map, i, j-1);
  sinkIsland(map, i, j+1);


}