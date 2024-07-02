const str = "Hello, Clint";
const reversed = reverseString(str);

console.log(reversed);

function reverseString(str) {
  return str.split("").reverse().join("");
}