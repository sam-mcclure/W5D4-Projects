Array.prototype.bubbleSort = function () {
  let sorted = false;
  while (sorted === false) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      let j = i + 1;
      if (this[i] > this[j]) {
        sorted = false;
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    }
  }
  return this;
};

String.prototype.substrings = function() {
  let result = [];
  for (let i = 0; i < this.length; i++){
    
    for (let j = i + 1; j <= this.length; j++){
      result.push(this.slice(i, j));
    }
  }
  return result;
};