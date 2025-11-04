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



** end of script.js **

