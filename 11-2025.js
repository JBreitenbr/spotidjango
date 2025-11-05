/* 01-11-2025: Signature Validation
Given a message string, a secret key string, and a signature number, determine if the signature is valid using this encoding method:

Letters in the message and secret key have these values:
a to z have values 1 to 26 respectively.
A to Z have values 27 to 52 respectively.
All other characters have no value.
Compute the signature by taking the sum of the message plus the sum of the secret key.
For example, given the message "foo" and the secret key "bar", the signature would be 57:

f (6) + o (15) + o (15) = 36
b (2) + a (1) + r (18) = 21
36 + 21 = 57
Check if the computed signature matches the provided signature.
*/

function verify(message, key, signature) {
  let a0="abcdefghijklmnopqrstuvwxyz";
  let a=[...a0.split(""),a0.toUpperCase().split("")].flat();
  let r=Array.from(Array(52).keys()).map((item)=>item+1);
  let obj = {};
  a.forEach((key, index) => {obj[key] = r[index];});
    let s1=message.split("").map((item)=>a.includes(item)?obj[item]:0).reduce((a,b)=>a+b,0);
    let s2=key.split("").map((item)=>a.includes(item)?obj[item]:0).reduce((a,b)=>a+b,0);
  return s1+s2==signature;
        }
verify("Check out the freeCodeCamp podcast,", "in the mobile app", 514)

/* 02-11-2025: Infected
On November 2nd, 1988, the first major internet worm was released, infecting about 10% of computers connected to the internet after only a day.

In this challenge, you are given a number of days that have passed since an internet worm was released, and you need to determine how many computers are infected using the following rules:

On day 0, the first computer is infected.
Each subsequent day, the number of infected computers doubles.
Every 3rd day, a patch is applied after the virus spreads and reduces the number of infected computers by 20%. Round the number of patched computers up to the nearest whole number.
For example, on:

Day 0: 1 total computer is infected.
Day 1: 2 total computers are infected.
Day 2: 4 total computers are infected.
Day 3: 8 total computers are infected. Then, apply the patch: 8 infected * 20% = 1.6 patched. Round 1.6 up to 2. 8 computers infected - 2 patched = 6 total computers infected after day 3.
Return the number of total infected computers after the given amount of days have passed.
*/

function infected(days) {
  let p=[1];
  for(let i=1;i<26;i++){
    p[i]=2*p[i-1];
    if(i%3==0){
      p[i]-=Math.ceil(0.2*p[i]);
    }
  }
  return p[days];
}

/* 03-11-2025: Word Counter
Given a sentence string, return the number of words that are in the sentence.

Words are any sequence of non-space characters and are separated by a single space.
*/

function countWords(sentence) {
  return sentence.split(" ").length;
}

/* 04-11-2025: Image Search
On November 4th, 2001, Google launched its image search, allowing people to find images using search terms. In this challenge, you will imitate the image search.

Given an array of image names and a search term, return an array of image names containing the search term.

Ignore the case when matching the search terms.
Return the images in the same order they appear in the input array.
*/

function imageSearch(images, term) {
  let res=[];
  let t=term.toLowerCase();
  for(let i=0;i<images.length;i++){
    if(images[i].toLowerCase().includes(t)){
      res.push(images[i]);
    }
  }
  return res;
}

/* 05-11-2025: Matrix Builder
Given two integers (a number of rows and a number of columns), return a matrix (an array of arrays) filled with zeros (0) of the given size.

For example, given 2 and 3, return:

[
  [0, 0, 0],
  [0, 0, 0]
]
*/

function buildMatrix(rows, cols) {
  return Array(rows).fill("").map((item)=>Array(cols).fill(0));
}
