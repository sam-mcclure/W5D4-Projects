Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++){
    callback(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  let result = new Array(this.length);
  this.myEach(function(el){
    result.push(callback(el));
  });
  return result;
};

Array.prototype.myReduce = function(callback, initialValue) {
  let acc = initialValue;
  if (acc === undefined) {
    acc = this.shift();
  }

  this.myEach(function(el){
    acc = callback(acc, el);
  });
  return acc;
};

// [1, 2, 3].myreduce(callback, 0);