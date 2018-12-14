const numbers = [-70, 2, 3, 4, 5, 6, 7, 8, 9, 10, 90, -1234]

const maxValue = arrayOfNumbers => {
   const arrayOfMinValues = arrayOfNumbers.sort( (a, b) => b - a)
   const maxValue = arrayOfMinValues[0]
   return maxValue
}

maxValue(numbers)