const orderWeight = strng => {
  const list = strng.split(" ");
  const weights = list.map(x => {
    return { ind: x.split("").reduce((m, n) => +m + +n, 0), value: x };
  });
  return weights
    .sort((a, b) => {
      if (a.ind < b.ind) return -1;
      else if (a.ind > b.ind) return 1;
      return helper(a.value, b.value);
    })
    .map(x => x.value)
    .join(" ");
};

const helper = (a, b) => {
  const length =
    a.toString().length < b.toString().length
      ? a.toString().length
      : b.toString().length;
  for (let i = 0; i < length; i++) {
    if (+a[i] === +b[i]) continue;
    if (+a[i] < +b[i]) return -1;
    else if (+a[i] > +b[i]) return 1;
  }
  return a.length === b.length ? 0 : a.length > b.length ? 1 : -1;
};

console.log(orderWeight("103 123 4444 99 2000")); // "2000 103 123 4444 99"
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")); // "11 11 2000 10003 22 123 1234000 44444444 9999"
