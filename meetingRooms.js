var minMeetingRooms = function (intervals) {
  const starts = intervals.map(interval => interval[0]).sort((a,b) => a - b);
  const ends = intervals.map(interval => interval[1]).sort((a,b) => a - b);
  let s = 0;
  let e = 0;
  let rooms = 0;
  let available = 0;
  while (s < starts.length) {
    console.log(ends[e], starts[s])
    if (ends[e] > starts[s]) {
      if (!available) {
        rooms++;
      } else {
        available--;
      }
      s++;
    } else {
      e++;
      available++;
    }
  }
  return rooms;
};

console.log(minMeetingRooms([[7,10], [2,4]]));
