function reverseStr(str) {
  return str.split("").reverse().join("");
}
const [, , ...args] = process.argv;

args.forEach((arg) => {
  console.log(reverseStr(arg));
});
