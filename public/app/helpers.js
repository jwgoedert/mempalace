module.exports = {
  shuffle: (arr) => {
    var currentIndex = arr.length, tempVal, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      tempVal = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = tempVal;
    }

    return array;
  },
  zip: (a, b, c) => 
      a.length ?
      [[a[0], b[0], c[0]]].concat(zip(a.slice(1), b.slice(1), c.slice(1))) : [];
  

};
