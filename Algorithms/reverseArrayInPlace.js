var reverseArrayInPlace = arr => {
  var arrayLen = arr.length

  let y = 0
  for(let x = arrayLen - 2; x >= 0; x--) {
    arr.push(arr[x])
  }
  arr.splice(0, arrayLen - 1)

  return arr
}

var array = ['a', 'b', 'c', 'd']
reverseArrayInPlace(numArray)

// Lesson Solution

var reverseArrayInPlace2 = arr => {
  for(var i = 0; i < arr.length / 2; i++) {
    var tempVar = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = tempVar
  }

  return arr
}

var numArray = [1, 2, 3, 4, 5, 6]
reverseArrayInPlace2(numArray)