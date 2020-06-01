const sumStrings = (a, b) => {
  const aL = a.split("").reverse();
  const bL = b.split("").reverse();
  const length = aL.length > bL.length ? a.length : b.length;
  let C = 0;
  const L = [];

  for (let i = 0; i < length; i++) {
    let A = 0;
    let B = 0;
    if (i < aL.length) A = aL[i];
    if (i < bL.length) B = bL[i];

    let T = `${+A + +B + C}`.split("");
    if (T.length > 1) {
      C = +T[0];
      L.push(T[1]);
    } else {
      C = 0;
      L.push(T[0]);
    }
  }
  L.reverse();
  const R = C === 0 ? [...L] : [C, ...L];
  R[0] === "0" ? R.splice(0, 1) : "";
  return R.join("");
};

console.log(sumStrings(("123", "456"), "579"));
