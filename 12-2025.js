/* 01-12-2025: Miles to Kilometers
Given a distance in miles as a number, return the equivalent distance in kilometers.

The input will always be a non-negative number.
1 mile equals 1.60934 kilometers.
Round the result to two decimal places. */

function convertToKm(miles) {
  return Math.round(miles*1.60934*100)/100;
}

/* 02-12-2025: Camel to Snake
Given a string in camel case, return the snake case version of the string using the following rules:

The input string will contain only letters (A-Z and a-z) and will always start with a lowercase letter.
Every uppercase letter in the camel case string starts a new word.
Convert all letters to lowercase.
Separate words with an underscore (_). */

function toSnake(camel) {
  let a="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let l=camel.length;
  let c=camel.split("");
  let ind=[0];
  let res=[];
  for(let i=0;i<camel.length;i++){
     if(a.includes(camel[i])){
       ind.push(i);
     }
  }
  ind.push(l);
  for(let i=1;i<ind.length;i++){
    res.push(camel.slice(ind[i-1],ind[i]));
  }
  let s=res.map((item)=>item.toLowerCase()).join("_");
  return s;
}

/* 03-12-2025: Markdown Ordered List Item Converter
Given a string representing an ordered list item in Markdown, return the equivalent HTML string.

A valid ordered list item in Markdown must:

Start with zero or more spaces, followed by
A number (1 or greater) and a period (.), followed by
At least one space, and then
The list item text.
If the string doesn't have the exact format above, return "Invalid format". Otherwise, wrap the list item text in li tags and return the string.

For example, given "1. My item", return "<li>My item</li>". */

function convertListItem(md) {
  let reg=/[1-9]\./gi;
  let s=md.match(reg);
  let ch=reg.test(md);
  let res=md.replace(s,"").trimStart();
  if(ch){
  return "<li>"+res+"</li>";
  } else return "Invalid format";
}

/* 04-12-2025: Permutation Count
Given a string, return the number of distinct permutations that can be formed from its characters.

A permutation is any reordering of the characters in the string.
Do not count duplicate permutations.
If the string contains repeated characters, repeated arrangements should only be counted once.
The string will contain only letters (A-Z, a-z).
For example, given "abb", return 3 because there's three unique ways to arrange the letters: "abb", "bab", and "bba".*/

function factorial(n) {
  if (n <= 1) {return 1;}
  return n * factorial(n - 1)
              }

function countPermutations(str) {
  let s=Array.from(new Set(str));
  let sn=factorial(str.length);
  for(let i=0;i<s.length;i++){
    let sp=str.split(s[i]);
    sn/=factorial(sp.length-1);
  }
  return sn;
}
