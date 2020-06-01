const menStillStanding = cards => {
  let teamA = 11,
    teamB = 11;
  if (!cards || cards.length === 0) return [teamA, teamB];
  return helper(cards, teamA, teamB);
};

const helper = (cards, teamA, teamB) => {
  const mapper = {};
  const tracker = [];
  for (let i = 0; i < cards.length; i++) {
    let x = cards[i];
    if (teamA < 7 || teamB < 7) break;
    let jersey = x.substring(0, x.length - 1);
    if (x.startsWith("A")) {
      jersey = "A" + jersey;
      if (x.endsWith("R") && tracker.indexOf(jersey) === -1) {
        teamA -= 1;
        tracker.push(jersey);
      } else if (x.endsWith("Y") && tracker.indexOf(jersey) === -1) {
        mapper[jersey] = (mapper[jersey] || 0) + 1;
        if (mapper[jersey] === 2) {
          tracker.push(jersey);
          teamA -= 1;
        }
      }
    } else if (x.startsWith("B")) {
      jersey = "B" + jersey;
      if (x.endsWith("R") && tracker.indexOf(jersey) === -1) {
        teamB -= 1;
        tracker.push(jersey);
      } else if (x.endsWith("Y") && tracker.indexOf(jersey) === -1) {
        mapper[jersey] = (mapper[jersey] || 0) + 1;
        if (mapper[jersey] === 2) {
          tracker.push(jersey);
          teamB -= 1;
        }
      }
    }
  }
  return [teamA, teamB];
};

console.log(menStillStanding([])); //, [11,11];
console.log(menStillStanding(["A4Y", "A4Y"])); // , [10,11];
console.log(menStillStanding(["A4Y", "A4R"])); // [10,11];
console.log(menStillStanding(["A4Y", "A5R", "B5R", "A4Y", "B6Y"])); // [9,10];
console.log(menStillStanding(["A4R", "A4R", "A4R"])); // [10,11];
console.log(menStillStanding(["A4R", "A6R", "A8R", "A10R", "A11R"])); // [6,11];
