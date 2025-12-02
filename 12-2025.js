/* 01-12-2025: Miles to Kilometers
Given a distance in miles as a number, return the equivalent distance in kilometers.

The input will always be a non-negative number.
1 mile equals 1.60934 kilometers.
Round the result to two decimal places. */

function convertToKm(miles) {
  return Math.round(miles*1.60934*100)/100;
}

/* Camel to Snake
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
