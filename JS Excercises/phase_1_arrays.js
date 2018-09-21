Array.prototype.uniq = function() {
  let result = [];
  this.forEach(function(elem){
    if (result.includes(elem) === false) {
      result.push(elem);
    }
  });
  return result;
};

Array.prototype.twoSum = function() {
  let result = [];
  for (let i = 0; i < this.length - 1; i++ ) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

// let arr = [-1, 2, 1, -2, 3];
// console.log(arr.twoSum());

Array.prototype.transpose = function() {
  let result = new Array(this.length);
  for (let i = 0; i < this.length; i++ ){
    result[i] = new Array(this.length);
  }
  
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      result[i][j] = this[j][i];
    }
  }
  return result;
};

// console.log(new Array(10));