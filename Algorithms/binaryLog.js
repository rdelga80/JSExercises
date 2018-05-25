var searchLetter = (alpha, letter, counter) => {
  let alphaSet = Math.floor(alpha.length / 2)
  console.log(alphaSet, alpha)
  let alphaLet = alpha[alphaSet]
  if(alphaLet > letter)
  {
    let newAlpha = alpha.slice(0, (alpha.length / 2))
    // console.log(newAlpha)
    counter++
    searchLetter(newAlpha, letter)
  }
  else if (alphaLet < letter)
  {
    let newAlpha = alpha.slice((alpha.length / 2), alpha.length)
    // console.log(newAlpha)
    counter++
    searchLetter(newAlpha, letter, counter)
  }
  else if (alphaLet === letter || alpha.length === 1)
  {
    console.log(alphaLet + ' is your letter! After ' + counter + ' attempts.')
  }
  else return false
}

// let alphaStart = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let alphaStart = [1, 2, 10, 15, 18, 22, 26, 30]

searchLetter(alphaStart, 2, 0)