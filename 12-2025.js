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

function mostFrequent(arr) {
    let n = arr.length, maxcount = 0;
    let res = 0;
    
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (arr[i] === arr[j])
                count++;
        }
        
        if (count > maxcount || (count === maxcount && arr[i] > res)) {
            maxcount = count;
            res = arr[i];
        }
    }

    return res;
}

/* 10-12-2025: Markdown Bold Parser
Given a string that may include some bold text in Markdown, return the equivalent HTML string.

Bold text in Markdown is any text that starts and ends with two asterisks (**) or two underscores (__).
There cannot be any spaces between the text and the asterisks or underscores, but there can be spaces in the text itself.
Convert all bold occurrences to HTML b tags and return the string.
For example, given "**This is bold**", return "<b>This is bold</b>".

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.*/

function parseBold(md) {
  let sp=md.split(" ");
  console.log(sp);
  let flt=sp.filter((item)=>item=="**"||item=="__");
  if(flt.length>0){
    return md;
  } else {
    let mp=sp.map((item)=>item.slice(0,2)=="**"||item.slice(0,2)=="__"?"<b>"+item.slice(2,item.length):item).map((item)=>item.slice(item.length-2,item.length)=="**"||item.slice(item.length-2,item.length)=="__"?item.slice(0,item.length-2)+"</b>":item);
    return mp.join(" ");
  } 
}

/* 11-12-2025: Roman Numeral Builder
Given an integer, return its equivalent value in Roman numerals.

Roman numerals use these symbols:

Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000
Roman numerals are written from largest to smallest, left to right using the following rules:

Addition is used when a symbol is followed by one of equal or smaller value. For example, 18 is written as XVIII (10 + 5 + 1 + 1 + 1 = 18).
Subtraction is used when a smaller symbol appears before a larger one, to represent 4 or 9 in any place value. For example, 19 is written as XIX (10 + (10 - 1)).
No symbol may be repeated more than three times in a row. Subtraction is used when you would otherwise need to write a symbol more than three times in a row. So the largest number you can write is 3999.
Here's one more example: given 1464, return "MCDLXIV" (1000 + (500 - 100) + 50 + 10 + (5 - 1)).*/

function toRoman(numToConv) {
 
let nums=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
let romans=['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];

let romRes="";
while(numToConv > 0){ 
  for(let i=0; i<romans.length; i++){
    if(numToConv >= nums[i]){
      numToConv=numToConv-nums[i]; 
      romRes=romRes+romans[i];
      break;
    }
  }
}
 return romRes;
}

/* 12-12-2025: Inventory Update
Given a 2D array representing the inventory of your store, and another 2D array representing a shipment you have received, return your updated inventory.

Each element in the arrays will have the format: [quantity, "item"], where quantity is an integer and "item" is a string.
Update items in the inventory by adding the quantity of any matching items from the shipment.
If a received item does not exist in the current inventory, add it as a new entry to the end of the inventory.
Return inventory in the order it was given with new items at the end in the order they appear in the shipment.
For example, given an inventory of [[2, "apples"], [5, "bananas"]] and a shipment of [[1, "apples"], [3, "bananas"]], return [[3, "apples"], [8, "bananas"]]. */

function arrToObj (keys, vals) {
  let res = {};
    keys.forEach((key, index) => {res[key] = vals[index];});
      return res;
      }

function updateInventory(inv, ship) {
  let arr1=[];
  let arr2=[];
  let am1=[];
  let am2=[];
  for(let i=0;i<inv.length;i++){
    arr1.push(inv[i][1]);
    am1.push(inv[i][0]);
  }
  for(let j=0;j<ship.length;j++){
    arr2.push(ship[j][1]);
    am2.push(ship[j][0]);
  }
  let d=arrToObj(arr1,am1);
  for(let j=0;j<ship.length;j++){
    if(Object.keys(d).includes(arr2[j])){
      d[arr2[j]]+=am2[j];
    } else {
      d[arr2[j]]=am2[j];
    }
  }
  let res=[];
  for(let k in d){
    res.push([d[k],k]);
  }
  return res;
    }
