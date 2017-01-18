// given two matrices of availability [startTime, endTime] and a duration find the first possible meeting of at least that duration

// sort both matrices based on starting

// iterating through both arrays, if no overlap, inc earlier one

// [[1,2][4,7]]
//[1,3] [5,7]
// 2

// i = 0, j=0
// earliest endtime - lateststart > duration
// if yes: return ealiest end + durationo
// else increment and compare

// Time Complexity O(n log n) for sort, 0(n) for comparing, so O(n log n)
// Space O(n) because have to copy sorted list, could sort in place

const meetingTime = (a, b, dur) => {
  const earlierTime = (a, b) => {
    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] === b[0]) {
      return 0;
    }
    return 1;
  };

  a.sort(earlierTime);
  b.sort(earlierTime);

  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    const latestStart = Math.max(a[i][0], b[j][0]);
    const earliestEnd = Math.min(a[i][1], b[j][1]);
    if (earliestEnd - latestStart >= dur) {
      return [latestStart, latestStart + dur];
    }
    // inc earliest time
    else a[i][0] === latestStart ? j++ : i++;
  }
  return [-1, -1];
};

const expect = require('chai').expect;

const a = [[1,2], [4,7]];
const b = [[1,3], [5,7]];

expect(meetingTime(a, b, 2)).to.eql([5,7]);


const c = [[0,1]]
const d = [[1,2]]

expect(meetingTime(c,d,1)).to.eql([-1, -1]);