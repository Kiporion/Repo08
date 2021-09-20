// Only change code below this line
function randomRangeNumer(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}
randomRangeNumer();
console.log(randomRangeNumer(10, 200));
// Only change code above this line
module.exports = randomRangeNumer;
