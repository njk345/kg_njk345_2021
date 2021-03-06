/* Array of number words */
const numWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six",
                  "Seven", "Eight", "Nine"];

/* Converts number string to word representation */
function numToWord(num) {
  let rv = "";
  for (var i = 0; i < num.length; i++) {
    rv += numWords[parseInt(num.substring(i, i+1))];
  }
  return rv;
}

/* Get command line args, convert each to number word */
let args = process.argv.slice(2);
let out = "";
for (var i = 0; i < args.length; i++) {
  out += numToWord(args[i]);
  if (i < args.length - 1) {
    out += ",";
  }
}
console.log(out);
