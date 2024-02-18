// Reversed Number DSA PALINDROME
let userinput = "102";
let converttonumber = Number(userinput);

let reversedNumber ="";
for(let a=0;a<userinput.length;a++){
  let remove = converttonumber %10;
   reversedNumber+=String(remove);
   converttonumber = Math.floor(converttonumber/10);
}
console.log(userinput === reversedNumber ? "PALINDROME NUMBER":"NOT PALINDROME NUMBER")

