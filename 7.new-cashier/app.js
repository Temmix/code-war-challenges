const getOrder = (input, result = []) => {
  [
    "Burger",
    "Fries",
    "Chicken",
    "Pizza",
    "Sandwich",
    "Onionrings",
    "Milkshake",
    "Coke"
  ].forEach(x => {
    let list = input.match(new RegExp(x.toLowerCase(), "gi"));
    list && list.forEach(y => result.push(x));
  });
  return result.join(" ");
};

console.log(
  getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza")
);
// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

console.log(getOrder("pizzachickenfriesburgercokemilkshakefriessandwich"));
// "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke"
