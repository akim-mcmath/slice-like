'use strict';

var slice = Array.prototype.slice;

function sliceLike(arrayLike, start, end) {
  return slice.call(arrayLike, start, end);
}

module.exports = sliceLike;
