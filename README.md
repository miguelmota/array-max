# array-max

Get maximum value of collection.

[![NPM](https://nodei.co/npm/arraymax.png)](https://nodei.co/npm/arraymax)

# Install

```bash
npm install arraymax
```

```bash
bower install array-max
```

# Usage

```javascript
var max = require('arraymax');

console.log(max([])); // -Infinity
console.log(max([2,3,1])); //  3

var col = [{n:2}, {n:3}, {n:1}];

var result = max(col, function(x) {
  return x.n;
});

console.log(result); // {n:3}

console.log(max(col, 'n')); // {n:3}
```

# License

MIT
