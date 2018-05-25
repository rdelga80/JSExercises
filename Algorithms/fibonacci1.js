// O(2^n)

var fibonacci = position => {
  // base case includes 1 and 1
  if(position < 3) return 1
  // recursive is going to be to submit down the position
  // i.e. position - 1, recursively
  else return fibonacci(position - 1) + fibonacci(position - 2)
}

fibonacci(3)

// 1, 1, 2, 3, 5, 8, 13, 21, 34...

// little code
// recurse, i.e. base case, first two number are 1 and 1