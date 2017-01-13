positive number[] -> number

inputs will be positive

Best Case: O(n)


Example:
[5|0, 2, 1, 9] => 95021
[52, 50, 2, 1, 9] => 9525021
[5, 52, 9, 3] => 95523
[5, 54, 9, 3] => 95543 
[5, 59, 9, 3] => 95953
when choosing between 2 values with same leading term:
	if next term is greater than leading term:
  	choose higher of next value
  else:
  	shorter
    
[45, 500, 489, 7, 3] => 7500489453
[4, 500, 449, 7, 3] => 750044943
[4, 500, 439, 7, 3] => ``

[46, 453]
if leading of a === leading of b:
	if (!both next) {
  	if next term < leading term:
    	choose shorter
    else if next term === leading:
    	compare next.next to leading
    else: 
    	choose longer
  }
  	else if (both have next term) {
    	choose value with larger next:
      if next === next:
      	compare next.next
    }

[4, 500, 439, 7, 3] 
{
'0': []
'1': []
'2': []
3: ['']
4: ['', '39']
5: ['00']
6: []
7: ['']
}

function highestDigit(arr) {
	const hash = hashBucket(arr);
  for (bucket in hash) {
  	sortBucket(hash[bucket]);
  }
  return parseInt(hash.reduce(// take largest term to smallest));
}

function sortBucket(arr, leadingTerm) {
	const sorted = [];
  let digit = 0;
  while (sorted.length < arr.length) {
  	const possibles = arr.map(ea => ea[digit] ? ea[digit] : arr[digit - 1] || leadingTerm);
    // ['4', '5']
    let max;
    
    sort.push(max);
    	
  }
	return sorted;
}

// .sort() => [3, 4, 439, 500, 7]
750044393

