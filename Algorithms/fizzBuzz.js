function fizzBuzz(num) {
  for(let x = 1; x <= num; x++) {
    if (x % 15 === 0)
    {
      console.log('Fizz Buzz')
    }
    else if(x % 3 === 0)
    {
      console.log('Buzz')
    }
    else if(x % 5 === 0)
    {
      console.log('Fizz')
    }
    else
    {
      console.log(x)
    }
  }
}

fizzBuzz(20)