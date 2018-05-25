var bubbleSort = array => {
  counter = 0
  for(var i = 0; i < array.length; i++) {
    currentNum = array[i]
    if(currentNum > array[i + 1]) {
      array[i] = array[i + 1]
      array[i + 1] = currentNum
      counter++
    }
  }
  console.log(array)
  if(counter > 0) bubbleSort(array)

  return array
}

bubbleSort([3, -9, -12, -1, 8])

var bubbleSort2 = array => {
  for (var i = array.length; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
    console.log(array)
  }

  return array
}

// bubbleSort2([5, 3, 8, 2, 1, 4])