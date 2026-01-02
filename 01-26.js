/* 01-01-2026 Resolution Streak
Given an array of arrays, where each sub-array represents a day of your resolution activities and contains three integers: the number of steps walked that day, the minutes of screen time that day, and the number of pages read that day; determine if you are keeping your resolutions.

The first sub-array is day 1, and second day 2, and so on.
A day is considered successful if all three of the following goals are met:

You walked at least 10,000 steps.
You had no more than 120 minutes of screen time.
You read at least five pages.
If all of the given days are successful, return "Resolution on track: N day streak." Where N is the number of successful days.

If one or more days is not a success, return "Resolution failed on day X: N day streak.". Where X is the day number of the first unsuccessful day, and N is the number of successful days before the first unsuccessful day.*/

function rCheck(arr){
  return arr[0]>=10000 && arr[1]<=120 && arr[2]>=5;
}

function resolutionStreak(days) {
  let m=days.map((item)=>rCheck(item));
  let sn=0;
  for(let i=0;i<m.length;i++){
    if(!m[i]){
      sn=i;
      break;
    }
  }
  if(sn>0){
    return `Resolution failed on day ${sn+1}: ${sn} day streak.`;
  } else return `Resolution on track: ${m.length} day streak.`;
}

/* 02-01-2026: Nth Fibonacci Number
Given an integer n, return the nth number in the fibonacci sequence.

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34. */

function nthFibonacci(n) {
  if (n <= 1) return n;
  let dp=new Array(n+1);
  dp[0]=0;
  dp[1]=0;
  dp[2]=1;
  dp[3]=1;
  for(let i=4;i<=n;i++){
    dp[i]=dp[i-1]+dp[i-2];
  }
  return dp[n];
}
