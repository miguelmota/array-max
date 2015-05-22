(function(root) {
  'use strict';

  function max(col, fn) {
    var top = -Infinity;
    var index;
    if (Array.isArray(col)) {
      for (var i = 0; i < col.length; i++) {
        var result = col[i];
        if (typeof fn === 'function') {
          result = fn(col[i]);
        } else if (typeof fn === 'string') {
          result = col[i][fn];
        }
        if (result >= top) {
          top = result;
          index = i;
        }
      }
    }
    return typeof index !== 'undefined' ? col[index] : top;
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = max;
    }
    exports.max = max;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return max;
    });
  } else {
    root.max = max;
  }

})(this);
