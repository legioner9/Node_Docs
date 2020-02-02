'use strict';

[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
});

let count = 0;
const arr = [7, 10, 1, 5, 2];
const sum = (acc, val) => (count++, acc + val);
const res = arr.reduce(sum);
console.log({ res, count });

const reduce = (fn, acc, [cur, ...rest]) => (
  cur === undefined ? acc : reduce(fn, fn(acc, cur), rest)
);

const res2 = reduce(sum, 0, arr);
console.log({ res2 });
