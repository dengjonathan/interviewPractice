const hasCycle = (linkedList) => {
  //linear time/ linear space -> store all nodes visited before and if you revisit return false
  // crux is how to not store all the visted spaces before
  const tortoise = node => node.next;
  const hare = node => node.next ? node.next.next : null;
  let fastNode = linkedList;
  let slowNode = linkedList;

  while (fastNode !== slowNode) {
    if (tortoise(slowNode) === null || hare(fastNode) === null) {
      return false;
    } else {
      fastNode = hare(fastNode);
      slowNode = tortoise(slowNode);
    }
  }
  return true;
};

