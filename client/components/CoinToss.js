// Good morning! Here's your coding interview problem for today.

// This problem was asked by Microsoft.

// You have n fair coins and you flip them all at the same time. Any that come up tails you set aside. The ones that come up heads you flip again. How many rounds do you expect to play before only one coin remains?

// Write a function that, given n, returns the number of rounds you'd expect to play until one coin remains.

function flipper(numCoinsArr) {

  let newArr = [];
  let randomNum = 0;

  numCoinsArr.map(num => {
    randomNum = Math.floor(Math.random() * 2)
    if (randomNum === 1) {
      newArr.push(randomNum);
    }
  })
  return newArr;
}

function coinToss(numCoins) {
  let counter = 0;
  let numCoinsArr = [];

  for (let i = 0; i < numCoins; i++) {
    numCoinsArr.push(i);
  }

  while (numCoinsArr.length > 1) {
    numCoinsArr = flipper(numCoinsArr);
    counter++;
  }

  return counter;
}
const numCoins = 20;
const numRounds = coinToss(numCoins);
console.log(`There were a total of ${numRounds} rounds for ${numCoins} coins`);
