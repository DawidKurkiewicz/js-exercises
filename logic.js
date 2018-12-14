export const average = arr => arr.reduce(
    (r, e, i, arr) => r + (e / arr.length),
    0
  )
  
  if (average([]) !== 0) throw Error('Average not works!')
  if (average([1, 2, 3, 4]) !== 2.5) throw Error('Average not works!')
  
  export const median = arr => {
    const length = arr.length
    const sorted = arr.sort()
  
    if (length === 0) return 0
  
    if (length % 2 !== 0) {
      return sorted[Math.floor(length / 2)]
    } else {
      return (sorted[length / 2 - 1] + sorted[length / 2]) / 2
    }
  }
  
  if (median([1, 2, 3, 4]) !== 2.5) throw Error('Median not works!')
  if (median([1, 2, 4, 3]) !== 2.5) throw Error('Median not works!')
  if (median([1, 2, 3]) !== 2) throw Error('Median not works!')
  if (median([]) !== 0) throw Error('Median not works!')
  
  export const min = arr => {
    if (arr.length === 0) return 0
  
    return Math.min.apply(null, arr)
  }
  
  if (min([1, 2, 3, 4]) !== 1) throw Error('Min not works!')
  if (min([-1, 1, -3]) !== -3) throw Error('Min not works!')
  if (min([]) !== 0) throw Error('Min not works!')
  
  export const max = arr => {
    if (arr.length === 0) return 0
  
    return Math.max(...arr)
  }
  
  if (max([1, 2, 3, 4]) !== 4) throw Error('Max not works!')
  if (max([-1, 1, -3]) !== 1) throw Error('Max not works!')
  if (max([]) !== 0) throw Error('Max not works!')
  
  export const getStats = arr => ({
    min: min(arr),
    max: max(arr),
    median: median(arr),
    avg: average(arr)
  })
  
  if (
    JSON.stringify(getStats([1, 2, 4, 3]))
    !==
    JSON.stringify({ min: 1, max: 4, median: 2.5, avg: 2.5 })
  ) throw Error('Stats not works!')
  
  export const getValueFromInput = input => (
    input.value.split(' ')
      .filter(number => number !== '')
      .map(number => Number(number))
      .filter(number => number || number === 0)
  )
  
  if (
    JSON.stringify(getValueFromInput({ value: '1 2 34 5' }))
    !==
    JSON.stringify([1, 2, 34, 5])
  ) throw Error('Get value form input not works!')
  if (
    JSON.stringify(getValueFromInput({ value: '1      2      34 5' }))
    !==
    JSON.stringify([1, 2, 34, 5])
  ) throw Error('Get value form input not works!')
  if (
    JSON.stringify(getValueFromInput({ value: '1 a ala ola 2' }))
    !==
    JSON.stringify([1, 2])
  ) throw Error('Get value form input not works!')