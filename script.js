const numbers = [-70, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1234]

const minValue = arrayOfNumbers => {
   const arrayOfMinValues = arrayOfNumbers.sort( (a, b) => a - b)
   const minValue = arrayOfMinValues[0]
   return minValue
}

minValue(numbers)