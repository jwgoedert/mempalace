module.exports = {
  shuffle: (arr) => {
    let curr = arr.length, tempVal, randomIndex;
    while (0 !== curr) {
      randomIndex = Math.floor(Math.random() * curr);
      curr -= 1;

      tempVal = arr[curr];
      arr[curr] = arr[randomIndex];
      arr[randomIndex] = tempVal;
    }
    return arr;
  },
  zip: (a, b, c) =>
    a.length ?
      [[a[0], b[0], c[0]]].concat(zip(a.slice(1), b.slice(1), c.slice(1))) : [];
  

};
