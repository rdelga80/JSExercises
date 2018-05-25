var mergeSort = array => {
  if (array.length < 2) return array
  var midIndex = Math.floor(array.length / 2)
  var firstHalf = array.slice(0, midIndex)
  var secondHalf = array.slice(midIndex)

  return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}

var merge = (array1, array2) => {
  var result = []
  while(array1.length && array2.length) {
    var minElem
    if(array1[0] < array2[0]) minElem = array1.shift()
    else minElem = array2.shift()
    result.push(minElem)
  }

  if(array1.length) result = result.concat(array1)
  else result = result.concat(array2)

  return result
}

mergeSort([100, -20, 40, -30, 16, -100, -101])
// mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1])

// My SOLUTION

// var mergeSort = (array1, array2) => {
//   var newArray = []

//   while(array1.length > 0 || array2.length > 0) {
//     if(array1[0] > array2[0] || array1.length === 0) {
//       newArray.push(array2[0])
//       array2 = array2.slice(1, array2.length)
//     } else if (array1[0] < array2[0] || array2.length === 0) {
//       newArray.push(array1[0])
//       array1 = array1.slice(1, array1.length)
//     }
//   }

//   return newArray
// }

// var array1 = [1, 4, 5, 7, 9]
// var array2 = [2, 3, 8, 10, 11]

// mergeSort(array1, array2)