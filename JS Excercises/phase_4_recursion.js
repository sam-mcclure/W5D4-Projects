function deepDup(arr){
  return arr.map(function(el){
    if (el instanceof Array) {
      return deepDup(el);
    }
    return el;
  });
}

function bsearch(arr, target){
  if (arr.length <= 0) {
    return -1;
  }
  if (arr.length === 1 && arr[0] !== target) {
    return -1;
  }
  
  let middle = Math.floor(arr.length / 2);
  if (arr[middle] === target) {
    return middle;
  } else if (arr[middle] > target) {
    return bsearch(arr.slice(0, middle), target);
  } else {
    let result = bsearch(arr.slice(middle + 1, arr.length), target);
    
    return (result === -1) ? result : middle + 1 + result;
  }
}

function range(start, end) {
  if (start > end) {
    return [];
  }
  if (start === end) {
    return [start];
  }
  
  return [start].concat(range(start + 1, end));
}

function sumRec(arr) {
  if (arr.length < 1) {
    return 0;
  }
  
  if (arr.length === 1) {
    return arr[0];
  }
  
  return arr[arr.length - 1] + sumRec(arr.slice(0, arr.length - 1));
}

function exponent1(base, exp){
  if (exp === 0){
    return 1;
  }
  
  return base * exponent1(base, exp - 1);
}

function exponent2(base, exp){
  if (exp === 0){
    return 1;
  }
  if (exp === 1){
    return base;
  }
  
  if (exp % 2 === 0) {
    return Math.pow(exponent2(base, exp / 2), 2);
  } else {
    return Math.pow(exponent2(base, (exp - 1) / 2), 2) * base;
  }
}

function fibonnaci(n){
  if (n <= 2) {
    return [0, 1].slice(0, n);
  }
  let result = fibonnaci(n-1);
  return result.concat([result[result.length - 1] + result[result.length - 2]]);
}

function mergesort(arr) {
  if (arr.length === 1 ) {
    return arr.slice();
  }
}






