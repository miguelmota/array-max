var test = require('tape');
var max = require('../array-max');

test('max', function (t) {
  t.plan(10);

  t.deepEqual(max([]), -Infinity);
  t.deepEqual(max(2), -Infinity);
  t.deepEqual(max('a'), -Infinity);
  t.deepEqual(max(undefined), -Infinity);
  t.deepEqual(max(null), -Infinity);
  t.deepEqual(max({}), -Infinity);
  t.deepEqual(max(Infinity), -Infinity);
  t.deepEqual(max([2,3,1]), 3);

  t.deepEqual(max([{n:2}, {n:3}, {n:1}], function(x) {
    return x.n;
  }), {n:3});

  t.deepEqual(max([{n:2}, {n:3}, {n:1}], 'n'), {n:3});
});
