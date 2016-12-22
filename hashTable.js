var makeHashTable = function(){
  var table = {};
  var storage = [];
  var storageLimit = 1000;

  const findBucket = key => {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    return storage[index];
  }

  const findIndex = (bucket, key) => {
    return bucket.reduce((memo, curr, index) => {
      if (curr.key === key) {
        memo = index;
      }
      return memo;
    }, -1);
  }

  table.insert = function(key, value){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];
    const bucketIndex = findIndex(storage[index], key);
    console.log(bucketIndex);
    if (bucketIndex > -1) {
      storage[index][bucketIndex] = {key, value};
      console.log(storage);
    } else {
      storage[index].push({key, value});
    }
  };

  table.retrieve = function(key){
    const bucket = findBucket(key);
    if (!bucket) {
      return undefined
    }
    const index = findIndex(bucket, key);
    return index > -1 ? bucket[index].value : undefined;
  };

  table.remove = function(key){
    const index = getIndexBelowMaxForKey(key, storageLimit);
    const bucket = findBucket(key);
    const bucketIndex = findIndex(bucket, key);
    storage[index] = [
      ...bucket.slice(0, bucketIndex),
      ...bucket.slice(bucketIndex + 1)
    ];
  }
  return table;
};

var getIndexBelowMaxForKey = function(str, max){
 var hash = 0;
 for (var i = 0; i < str.length; i++) {
   hash = (hash<<5) + hash + str.charCodeAt(i);
   hash = hash & hash; // Convert to 32bit integer
   hash = Math.abs(hash);
 }
 return hash % max;
};

const table = makeHashTable();

table.insert('Keanu', 'Reeves');
table.insert('Keanu', 'Alpha')
table.remove('Keanu');
const a = table.retrieve('Keanu');

console.log(a);