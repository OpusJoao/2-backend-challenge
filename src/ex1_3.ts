function makeAllPositive(numbers: number[]){
    const newArray = Object.assign(numbers, [])

   return newArray.map(value => (value < 0 ? value * -1 : value))
}

const numbers = [-1, 2, -3, 4];
const resultArray = makeAllPositive(numbers);

console.log(numbers)
console.log(resultArray)