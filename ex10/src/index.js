// Only change code below this line
function mathTest(x, y) {
  // Only change code above this line
  if (x < 0 || y < 0) {
    // Only change code below this line
    return;
    // Only change code above this line
  }
  return Math.round(Math.pow(Math.sqrt(x) + Math.sqrt(y), 2));
}
// Only change code below this line
mathTest();
console.log(mathTest(3, 3));
// Only change code above this line
module.exports = mathTest;
