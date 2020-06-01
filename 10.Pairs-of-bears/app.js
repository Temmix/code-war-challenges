const bears = (X, S, L = S.length, R = "") => {
  let male = "B";
  let female = "8";
  for (let i = 0; i < L; i++) {
    if (i + 1 < L && S[i] === male && S[i + 1] === female) {
      R += male + female;
      i++;
    } else if (i + 1 < L && S[i] === female && S[i + 1] === male) {
      R += female + male;
      i++;
    }
  }
  return [R, R.length / 2 >= X];
};

console.log(bears(7, "8j8mBliB8gimjB8B8jlB")); // , ["B8B8B8",false];
console.log(bears(3, "88Bifk8hB8BB8BBBB888chl8BhBfd")); // ["8BB8B8B88B",true];
console.log(bears(8, "8")); // , ["",false];
