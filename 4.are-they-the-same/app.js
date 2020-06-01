const comp = (array1, array2) => {
  if (!array1 || !array2 || array1.length !== array2.length) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);

  for (let i = 0; i < array1.length; i++)
    if (Math.pow(array1[i], 2) !== array2[i]) return false;
  return true;
};
a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19
];
//Test.assertEquals(comp(a1, a2), true);
console.log(comp([44, 30, 84], [1936, 900, 7056])); // true
