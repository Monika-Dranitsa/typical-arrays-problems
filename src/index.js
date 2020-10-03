
exports.min = function min (array) {
  if (array === undefined || array.length === 0) {
  return 0;
}

let temp = array[0];

array.forEach(element => {
  if (element < temp) {
    temp = element;
  }
});

return temp;
}


exports.max = function max (array) {
  if (array === undefined || array.length === 0) {
  return 0;
}

let temp = array[0];

array.forEach(element => { 
  if (element > temp) {
    temp = element;
  }  
});

return temp;
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) {
  return 0;
  }

  let temp = 0;

  array.forEach(element => {
    temp = temp + element;
  });
  return temp/array.length;
}
