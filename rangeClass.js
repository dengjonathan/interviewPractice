const genMaker = function* (start, end, step){
  let value = start;
  let dir = step > 0 ? 1 : -1;
  while(value * dir < end)
    yield value += step;
}

var Range = function(start, end=start, step = end - start > 0 ? 1 : -1) {
  if (start === null) {
    return null;
  }
  this.start = start;
  this.end = end;
  this.step = step;
  this.resetGen();
};

Range.prototype.resetGen = function(){this._gen = genMaker(this.start, this.end, this.step)}

Range.prototype.next = function() {return this._gen.next().value};

Range.prototype.size = function () {
  return Math.floor((this.end - this.start) / this.step) + 1;
};

Range.prototype.each = function (callback) {
  this.resetGen();
  callback(this.start);
  for (let i of this._gen) {
    callback(i);
  }
};

Range.prototype.includes = function (val) {
  if (this.end === this.start) {
    return val === this.start;
  }
  return this.end - val + val - this.start === this.end - this.start
    && (val - this.start) % this.step === 0;
};

const range = new Range(10, 0);
range.each(console.log);