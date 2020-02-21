
exports.min = function min (array) {
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
   return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
    let sum = array.reduce((acu, cur) => acu += cur, 0)
    return sum/array.length;
}
