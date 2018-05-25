var getMean = array => {
  let mean = 0
  for(let x = 0; x < array.length; x++) {
    mean += array[x]
  }
  return mean/array.length
}

var getMedian = array => {
  array.sort(function(a,b) { return a - b })

  var median
  if(array.length % 2 !== 0) {
    median = array[Math.floor(array.length / 2)]
  } else {
    var mid1 = array[(array.length / 2) - 1]
    var mid2 = array[array.length / 2]
    median = (mid1 + mid2) / 2
  }

  return median
}

var getMode = array => {
  let modeObj = {}

  array.forEach(num => {
    if(!modeObj[num]) modeObj[num] = 0
    modeObj[num]++
  })
  
  let maxFrequecy = 0
  let mode = []
  for(var num in modeObj) {
    if(modeObj[num] > maxFrequecy) {
      modes = [ num ]
      maxFrequecy = modeObj[num]
    }
    else if (modeObj[num] === maxFrequecy) modes.push(num)
  }

  if (modes.length === Object.keys(modeObj).length) modes = []

  return modes
}

var meanMedianMode = array => {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
}

meanMedianMode([9, 10, 23, 10, 23, 9])