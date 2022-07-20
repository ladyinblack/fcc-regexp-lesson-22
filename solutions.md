## SOLUTION 1
```js
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result);
```
### Code Explanation
1. `^` - start of input
2. `[a-z]` - first character is a letter
3. `[a-z]+` - following characters are letters
4. `\d*$` - input ends with 0 or more digits
5. `|` - or 
6. `^[a-z]` - first character is a letter
7. `\d\d+` - following characters are 2 or more digits
8. `$` - end of input

## SOLUTION 2
```js
let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
```
### Code Explanation
1. `^` - start of input
2. `[a-z]` - first character is a letter
3. `[0-9]{2,0}` - ends with two or more numbers
4. `|` - or
5. `[a-z]+` - has one or more letters next
6. `\d*` - ends with zero or more numbers
7. `$` - end of input
8. `i` - ignore case of input
