function Observable(forEach) {
  this._forEach = forEach;
}

Observable.prototype = {
  forEach: function(onNext, onError, onCompleted) {
    // 3 functions passed in
    if (typeof arguments[0] === 'function') {
      return this._forEach({
        onError: onError || function(){},
        onCompleted: onCompleted || function(){},
        onNext: onNext
      });
    } else {
      // if onNext is Observer object
      return this._forEach(onNext);
    }  
  },
  map: function(projection) {
    const self = this;
    return new Observable(function forEach(observer) {
      return self.forEach(
        function onNext(x) {observer.onNext(projection(x))},
        function onError(e) {observer.onError(e);},
        function onCompleted() {observer.onCompleted();}
      )
    }); 
  },
  filter: function(predicate) {
    const self = this;
    return new Observable(function forEach(observer) {
      return self.forEach(
        function onNext(x) {if (predicate(x)){observer.onNext(x)}},
        function onError(e) {observer.onError(e);},
        function onCompleted() {observer.onCompleted();}
      )
    });
  }
};

// this is not on prototype because it's a static method
Observable.fromEvent = function(dom, eventName) {
  return new Observable(function forEach(observer){
    const handler = e => observer.onNext(e);

    dom.addEventListener(eventName, handler);

    return {
      dispose: () => {
        dom.removeEventListener(eventName, handler);
      }
    };
  })
}

const clicks = Observable.fromEvent(document.getElementById('button'), 'click')
  .filter(e => e.pageX > 40)
  .map(e => e.pageX + 'px');

const listen = clicks.forEach(x => console.log(x));
listen.dispose();