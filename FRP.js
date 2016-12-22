const Rx = require('rx');
const axios = require('axios');

const requestStream = Rx.Observable.just('https://api.github.com/users');

//emmited value is a another stream i.e. the stream of responses from getJSON
const responseStream = requestStream.flatMap(requestUrl => 
  Rx.Observable.fromPromise(axios.get(requestUrl))
);

responseStream.subscribe(res => console.log(res));

// handling user events
const refreshButton = document.querySelector('.refresh');
const refreshClickStream = Rx.Observable.fromEvent(refreshButton, 'click');

requestStream = refreshClickStream
  .startWith('startup by emulating a click')
  .map(() => {
    const randomOffset = Math.floor(Math.random() * 500);
    return 'https://api.github.com/users?since=' + randomOffset;  
  });

var suggestion1Stream = responseStream
  .map(function(listUsers) {
    // get one random user from the list
    return listUsers[Math.floor(Math.random()*listUsers.length)];
  });