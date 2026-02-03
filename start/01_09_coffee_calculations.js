function coffeeDate(coffeeArr) {
  let coffeeSum = coffeeArr.reduce(
    (totalCoffees, numCoffees) => (totalCoffees += numCoffees)
  );

  return `The total bill is ${coffeeSum}`;
}

console.log(coffeeDate([4,4,4,4,4,4]))



let Marks = [89,78,99,87,73,92];

let max = Marks.reduce((current, next) => {
  return Math.max(current, next);
})

console.log(`Max : ${max}`)