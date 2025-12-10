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

/* 05-12-2025 Symmetric Difference
Given two arrays, return a new array containing the symmetric difference of them.

The symmetric difference between two sets is the set of values that appear in either set, but not both.
Return the values in the order they first appear in the input arrays. */

function difference(arr1, arr2) {
  let res=[];
  for(let i=0;i<arr1.length;i++){
    if(!arr2.includes(arr1[i])){
      res.push(arr1[i]);
    }
  }
  for(let i=0;i<arr2.length;i++){
    if(!arr1.includes(arr2[i])){
      res.push(arr2[i]);
    }
  }
  return res;
}

/* 06-12-2025: Date Formatter
Given a date in the format "Month day, year", return the date in the format "YYYY-MM-DD".

The given month will be the full English month name. For example: "January", "February", etc.
In the return value, pad the month and day with leading zeros if necessary to ensure two digits.
For example, given "December 6, 2025", return "2025-12-06". */

function formatDate(dateString) {
  let sp=dateString.split(" ");
  let conv={"January":"01","February":"02","March":"03","April":"04","May":"05","June":"06","July":"07","August":"08","September":"09","October":"10","November":"11","December":"12"};
  let p1=sp[0];
  let p2=sp[1].replace(",","");
  let d=Number(p2)<10?"0"+p2:p2;
  let res=sp[2]+"-"+conv[p1]+"-"+d;
  return res;
}

/* 07-12-2025: String Compression
Given a string sentence, return a compressed version of the sentence where consecutive duplicate words are replaced by the word followed with the number of times it repeats in parentheses.

Only consecutive duplicates are compressed.
Words are separated by single spaces.
For example, given "yes yes yes please", return "yes(3) please".*/

function compressString(s) {
  let obj={};
  let sp=s.split(" ");
  for(let i=0;i<sp.length;i++){
    if(Object.keys(obj).includes(sp[i])){
      obj[sp[i]]+=1;
    } else {
      obj[sp[i]]=1;
    }
  }
  let stri=Array.from(new Set(sp)).map((item)=>item+"("+obj[item]+")").join(" ").replaceAll("(1)","");
  return stri;
}

/* 08-12-2025: Pounds to Kilograms
Given a weight in pounds as a number, return the string "(lbs) pounds equals (kgs) kilograms.".

Replace "(lbs)" with the input number.
Replace "(kgs)" with the input converted to kilograms, rounded to two decimals and always include two decimal places in the value.
1 pound equals 0.453592 kilograms.
If the input is 1, use "pound" instead of "pounds".
If the converted value is 1, use "kilogram" instead of "kilograms".*/

function convertToKgs(lbs) {
  let kg=Math.round(0.453592*lbs*100)/100;
  let fkg=parseInt(kg)==kg?kg.toString()+".00":kg.toString();
  let s1=lbs==1?"":"s";
  let s2=kg==1?"":"s";
  let stri=`${lbs} pound${s1} equals ${fkg} kilogram${s2}.`;
  return stri;
}

/* 09-12-2025: Most Frequent
Given an array of elements, return the element that appears most frequently.

There will always be a single most frequent element.*/

