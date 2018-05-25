// O(N^2)

var reverseWords = string => {
  var stringArr = string.split(' ')

  var newString = ''
  stringArr.forEach(str => {
    for(let x = str.length - 1; x >= 0; x--) {
      let revLetter = str[x]
      newString += revLetter
    }
    newString += ' '
  })

  return newString
}

reverseWords('Coding Javascript')