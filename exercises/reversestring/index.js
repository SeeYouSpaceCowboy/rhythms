// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// Solution 1
// Takeaway: Uses built-in JavaScript reverse function.
// function reverse(str) {
//   return str.split('').reverse().join('')
// }

// Solution 2
// Takeaway: Removes the use of JavaScript's built-in reverse function for more manual reverse.
// function reverse(str) {
//   let reversed = ''
//
//   // Loop 1: For loop solutions.
//   // let letters = str.split('')
//   //
//   // for(n = letters.length-1; n > -1; n--) {
//   //   reversed += letters[n]
//   // }
//
//   // Loop 2: Simpliar for loop.
//   for(let letter of str) {
//     reversed = letter + reversed
//   }
//
//   return reversed
// }

// Solution 3
// Takeaway: Using JavaScript's reduce function to show dominance.
function reverse(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '')
}

reverse("Hello")

module.exports = reverse;
