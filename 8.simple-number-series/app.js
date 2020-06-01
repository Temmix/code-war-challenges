const missing = (Q, L, N, R, C, T, F) => {
  for (L = 0; ++L < Q.length; ) {
    C = 1;
    N = +Q.slice(0, L);
    for (F = L; F < Q.length; ) {
      T = ++N + "";
      if (T != Q.slice(F, (F += T.length)))
        if (((F -= T.length), (R = N), !C--)) break;
    }
    if (!C && F === Q.length) return R;
  }
  return -1;
};

console.log(missing("123567")); // ,4;
console.log(missing("899091939495")); //,92;
console.log(missing("9899101102")); // ,100;
console.log(missing("599600601602")); //,-1;
console.log(missing("8990919395")); // ,-1;
console.log(missing("998999100010011003")); // ,1002;
console.log(missing("99991000110002")); // ,10000;
console.log(missing("979899100101102")); // ,-1;
console.log(missing("900001900002900004900005900006")); // ,900003;
