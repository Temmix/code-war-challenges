const golfScoreCalculator = (parList, scoreList) =>
  [...scoreList].reduce((x, y, z) => x + (+y - +parList[z]), 0);

console.log(
  golfScoreCalculator("443454444344544443", "353445334534445344"),
  -1
);
