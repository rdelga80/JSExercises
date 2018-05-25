var twoSumNested = (numArray, sum) => {
  // returns every pair of numbers from 'numarray'
  // that adds up to the sum
  let result = []
  for(let x = 0; x < numArray.length; x++) {
    for(let y = 0; y < numArray.length; y++) {
      if(numArray[x] + numArray[y] === sum) result.push([numArray[x], numArray[y]])
    }
  }
  return result
}

var twoSumLinear = (numArray, sum) => {
  let resultObj = {}

  numArray.forEach(num => {
    if(!resultObj[num]) resultObj[num] = 0
    resultObj[num]++
  })

  var pairs = []
  var hashtable = []
  for(let x = 0; x < numArray.length; x++) {
    var currNum = numArray[x]
    var counterpart = sum - currNum
    if(hashtable.indexOf(counterpart) !== -1) {
      pairs.push([ currNum, counterpart ])
    }
    hashtable.push(currNum)
  }
  return pairs
}

function twoSumLecture(numArray, sum){
    var pairsArr = [];
    var numObj = {};
    numArray.forEach(function(num){
        if(!numObj[num]) numObj[num] = 0;
        numObj[num]++
    });
 
    Object.keys(numObj).forEach(function(key){
        if(numObj[sum-key]){
            for(var i = 0; i < numObj[sum-key]*numObj[key]; i++) { //for each pair that can be made
                pairsArr.push([key, sum-key]); //push the pair to pairsArr
            }
            numObj[sum-key] = null; //set to null to avoid pairing again.
        }
    });
    return pairsArr;
}

let array = [2,2,3,1,2,4,5]
sum = 5

var twoSum = (array, sum) => {
  return {
    nested: twoSumNested(array, sum),
    linear: twoSumLinear(array, sum),
    lecture: twoSumLecture(array, sum)
  }
}

twoSum(array, sum)

// [[6, 1], [3,4], [3, 4]]
// array of arrays
// numbers can be in multiple arrays

// O(n^2), nested loops
// O(n), linear - hash table
