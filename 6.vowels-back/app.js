const vowelBack = s => {
  const A = "abcdefghijklmnopqrstuvwxyz";
  const K = "vkbaafpqistuvwnyzabtpvfghi";
  return [...s].map(x => K[A.indexOf(x)]).join``;
};

console.log(vowelBack("testcase")); // , "tabtbvba");
console.log(vowelBack("codewars")); //  "bnaafvab");
console.log(vowelBack("exampletesthere")); //  "agvvyuatabtqaaa");
