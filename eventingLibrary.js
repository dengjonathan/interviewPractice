const mixEvents = obj => {
  let events = {};

  obj.trigger = (event, ...args) => {
    return events[event] ? events[event].forEach(each => { each(...args) }) : false;
  };

  obj.on = (event, callback) => {
    if (!events[event]) {
      events[event] = [];
    }
    events[event].push(callback);
  };
  return obj;
};


var obj = mixEvents({ name: 'Alice', age: 30 });
obj.on('ageChange', function() { // On takes an event name and a callback function
  console.log('Age changed');
});
obj.age++;
obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
console.log(obj.age);
