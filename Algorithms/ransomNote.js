// O(n + m) / O(n) Linear Complexity, not nested

var harmlessRansomNote = (noteText, magazineText) => {
  var noteArray = noteText.split(' ')
  var magazineArray = magazineText.split(' ')
  var magazineObj = {}

  magazineArray.forEach(word => {
    if(!magazineObj[word]) magazineObj[word] = 0
    magazineObj[word]++
  })

  var noteIsPossible = true
  noteArray.forEach(word => {
    if(magazineObj[word]) {
      magazineObj[word]--
      if(magazineObj[word] < 0) noteIsPossible = false
    }
    else noteIsPossible = false
  })

  return noteIsPossible
}

const noteText = "We have your kid and will give them back when you release the cats to our awaiting hovercraft"

const magazineText = "There were a few of the ones that saw the other thing, and we reported back the higher ups said kid shouldn't give in to the will of the cats but don't believe the hype that our awaiting had nothing to do with the ones we believe that are them cats hovercraft give them back when you release cats our your We have your kid and will give them back when you release the cats to our awaiting hovercraft"

harmlessRansomNote(noteText, magazineText)

// N^2

// var harmlessRansomNote = (noteText, magazineText) => {
//   var noteArray = noteText.split(' ')
//   var magazineArray = magazineText.split(' ')

//   for(let x = 0; x < noteArray.length; x++)
//   {
//     let yCount = 0
//     for(let y = 0; y < magazineArray.length; y++)
//     {
//       if(noteArray[x].toLowerCase() === magazineArray[y].toLowerCase()) yCount++
//     }
//     yCount > 0
//       ? console.log(noteArray[x] + ' can be used.')
//       : console.log(noteArray[x] + ' cannot be used.')
//     yCount = 0
//   }
// }

// const noteText = "We have your kid and will give them back when you release the cats to our awaiting hovercraft."

// const magazineText = "There were a few of the ones that saw the other thing, and we reported back. The higher ups said kids shouldn't give in to the will of the cats, but don't believe the hype that our awaiting had nothing to do with the ones we believe that are them ."

// harmlessRansomNote(noteText, magazineText)