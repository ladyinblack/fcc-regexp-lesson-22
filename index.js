// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Restrict Possible Usernames</h1>`;

/** TODO:
 * Usernames are used everywhere on the internet.  They are what give users a unique identity on their favorite sites.
 * You need to check all the usernames in a database.  Here are some simple rules that users have to follow when creating their username.
 *  1. Usernames can only use alpha-numeric characters.
 *  2. The only numbers in the username have to be at the end.  There can be zero or more of them at the end.  Username cannot start with the number.
 *  3. Username letters can be lowercase and uppercase.
 *  4. Usernames have to be at least two characters long.  A two-character username can only use alphabet letters as characters.
 * Change the regex userCheck to fit the constraints listed above.
 
 let username = "JackOfAllTrades";
 let userCheck = /change/;   // Change this line 
 let result = userCheck.test(username);
 */

function CheckUsernames(username) {
  // let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
  let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
  return userCheck.test(username);
}

console.log("Testing 'JackOfAllTrades'...", CheckUsernames('JackOfAllTrades'));
console.log("Testing 'JACK'...", CheckUsernames('JACK'));
console.log("Testing 'J'...", CheckUsernames());
console.log("Testing 'Jo'...", CheckUsernames('Jo'));
console.log("Testing 'Oceans11'...", CheckUsernames('Oceans11'));
console.log("Testing 'RegexGuru'...", CheckUsernames('RegexGuru'));
console.log("Testing '007'...", CheckUsernames('007'));
console.log("Testing '9'...", CheckUsernames('9'));
console.log("Testing 'A1'...", CheckUsernames('A1'));
console.log("Testing 'BadUs3rnam3'...", CheckUsernames('BadUs3rnam3'));
console.log("Testing 'Z97'...", CheckUsernames('Z97'));
console.log("Testing 'c57bT3'...", CheckUsernames('c57bT3'));
console.log("Testing 'AB1'...", CheckUsernames('AB1'));
console.log("Testing 'J%4'...", CheckUsernames('J%4'));

/** EXPLANATION:
 * userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i
 *    1. ^ - start of input
 *    2. [a-z] - first character is a letter
 *    3. [a-z]+ - following characters are letters
 *    4. \d*$ - input ends with 0 or more digits
 *    5. | - or
 *    6. ^[a-z] - first character is a letter
 *    7. \d\d+ - following characters are 2 or more digits
 *    8. $ - end of input
 *
 * userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i
 *    1. ^ - start of input
 *    2. [a-z] - first character is a letter
 *    3. [0-9]{2,0} - ends with two or more numbers
 *    4. | - or
 *    5. [a-z]+ - has one or more letters next
 *    6. \d* - and ends with zero or more numbers
 *    7. $ - end of input
 *    8. i - ignore case of input
 */
