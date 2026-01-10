""" 01-01-2026 Resolution Streak
Given an array of arrays, where each sub-array represents a day of your resolution activities and contains three integers: the number of steps walked that day, the minutes of screen time that day, and the number of pages read that day; determine if you are keeping your resolutions.

The first sub-array is day 1, and second day 2, and so on.
A day is considered successful if all three of the following goals are met:

You walked at least 10,000 steps.
You had no more than 120 minutes of screen time.
You read at least five pages.
If all of the given days are successful, return "Resolution on track: N day streak." Where N is the number of successful days.

If one or more days is not a success, return "Resolution failed on day X: N day streak.". Where X is the day number of the first unsuccessful day, and N is the number of successful days before the first unsuccessful day."""

def rcheck(lst):
    return lst[0]>=10000 and lst[1]<=120 and lst[2]>=5

def resolution_streak(days):
    sn=0
    for i in range(len(days)):
        if(not rcheck(days[i])):
            sn=i
            break
    if sn>0:
        return f"Resolution failed on day {sn+1}: {sn} day streak."
    else:
        return f"Resolution on track: {len(days)} day streak."

""" 02-01-2026: Nth Fibonacci Number
Given an integer n, return the nth number in the fibonacci sequence.

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34. """

def nth_fibonacci(n):
    if n<=1:
        return n
    dp=[0]*(n+1)
    dp[0]=0
    dp[1]=0
    dp[2]=1
    dp[3]=1
    for i in range(4,n+1):
        dp[i]=dp[i-1]+dp[i-2]
    return dp[n]
    
""" 03-01-2026: Left-Handed Seat at the Table
Given a 4x2 matrix (array of arrays) representing the seating arrangement for a meal, determine how many seats a left-handed person can sit at.

A left-handed person cannot sit where a right-handed person would be in the seat to the immediate left of them.
In the given matrix:

An "R" is a seat occupied by a right-handed person.
An "L" is a seat occupied by a left-handed person.
An "U" is an unoccupied seat.
Only unoccupied seats are available to sit at.
The seats in the top row are facing "down", and the seats in the bottom row are facing "up" (like a table), so left and right are relative to the seat's orientation.
Corner seats only have one seat next to them.
For example, in the given matrix:

[
  ["U", "R", "U", "L"],
  ["U", "R", "R", "R"]
]
The top-left seat is cannot be sat in because there's a right-handed person to the left. The other two open seats can be sat in because there isn't a right-handed person to the left.
"""

def find_left_handed_seats(table):
    row1=table[0]
    row2=table[1]
    rev=list("".join(table[1])[::-1])
    sn=0
    for i in range(len(row1)-1):
        if row1[i]=="U" and row1[i+1]!="R":
            sn+=1
        if rev[i]=="U" and rev[i+1]!="R":
            sn+=1
    if row1[-1]=="U":
        sn+=1
    if rev[-1]=="U":
        sn+=1
    return sn

""" 04-01-2026: Leap Year Calculator
Given an integer year, determine whether it is a leap year.

A year is a leap year if it satisfies the following rules:

The year is evenly divisible by 4, and
The year is not evenly divisible by 100, unless
The year is evenly divisible by 400. 
"""

def is_leap_year(year):
    return year%400==0 or year%4==0 and year%100!=0

""" 05-01-2026: Tire Pressure
Given an array with four numbers representing the tire pressures in psi of the four tires in your vehicle, and another array of two numbers representing the minimum and maximum pressure for your tires in bar, return an array of four strings describing each tire's status.

1 bar equal 14.5038 psi.
Return an array with the following values for each tire:

"Low" if the tire pressure is below the minimum allowed.
"Good" if it's between the minimum and maximum allowed.
"High" if it's above the maximum allowed. """

def tire_status(pressures_psi, range_bar):
    c=14.5038
    res=[]
    for el in pressures_psi:
        if el/c<range_bar[0]:
            res.append("Low")
        elif el/c<range_bar[1]:
            res.append("Good")
        else:
            res.append("High")
    return res

""" 06-01-2026: vOwElcAsE
Given a string, return a new string where all vowels are converted to uppercase and all other alphabetical characters are converted to lowercase.

Vowels are "a", "e", "i", "o", and "u" in any case.
Non-alphabetical characters should remain unchanged. """

def vowel_case(s):
    v=list("aeiou")
    c=list("BCDFGHJKLMNPQRSTVWXYZ")
    res=""
    for l in s:
        if l in v:
            res+=l.upper()
        elif l in c:
            res+=l.lower()
        else:
            res+=l
    return res

""" 07-01-2026: Markdown Unordered List Parser
Given the string of a valid unordered list in Markdown, return the equivalent HTML string.

An unordered list consists of one or more list items. A valid list item appears on its own line and:

Starts with a dash ("-"), followed by
At least one space, and then
The list item text.
The list is given as a single string with new lines separated by the newline character ("\n"). Do not include the newline characters in the item text.

Wrap each list item in HTML li tags, and the whole list of items in ul tags.

For example, given "- Item A\n- Item B", return "<ul><li>Item A</li><li>Item B</li></ul>". """

def parse_unordered_list(md):
    sp=md.replace("\n","").split("- ")
    res="<ul>"
    for el in sp:
        if el!="":
            res+="<li>"+el.strip()+"</li>"
    return res+"</ul>"
    
""" 08-01-2026: Sorted Array?
Given an array of numbers, determine if the numbers are sorted in ascending order, descending order, or neither.

If the given array is:

In ascending order (lowest to highest), return "Ascending".
In descending order (highest to lowest), return "Descending".
Not sorted in ascending or descending order, return "Not sorted". """

def is_sorted(arr):
    c=[]
    for i in range(1,len(arr)):
        c.append(arr[i]-arr[i-1])
    flt1=[]
    flt2=[]
    for i in range(len(c)):
        if c[i]>0:
            flt1.append(c[i])
        if c[i]<0:
            flt2.append(c[i])
    if len(flt1)==len(c):
        return "Ascending"
    elif len(flt2)==len(c):
        return "Descending"
    else:
        return "Not sorted"

""" 09-01-2026: Circular Prime
Given an integer, determine if it is a circular prime.

A circular prime is an integer where all rotations of its digits are themselves prime.

For example, 197 is a circular prime because all rotations of its digits: 197, 971, and 719, are prime numbers. """

def is_prime(n):
    res=[]
    for i in range(2,n):
        if n%i==0:
            res.append(i)
    if len(res)==0:
        return True
    else:
        return False


def is_circular_prime(n):
    c=[str(n)]
    for i in range(1,len(str(n))):
        t=c[i-1][1:]+c[i-1][0]
        c.append(t)
    for i in range(len(c)):
        if not is_prime(int(c[i])):
            return False
            break
    return True
    
""" 10-01-2026: Tic-Tac-Toe
Given a 3×3 matrix (an array of arrays) representing a completed Tic-Tac-Toe game, determine the winner.

Each element in the given matrix is either an "X" or "O".
A player wins if they have three of their characters in a row - horizontally, vertically, or diagonally.

Return:

"X wins" if player X has three in a row.
"O wins" if player O has three in a row.
"Draw" if no player has three in a row. """

def tic_tac_toe(m):
    t=[[m[j][i] for j in range(len(m))] for i in range(len(m[0]))]
    d1=m[0][0]+m[1][1]+m[2][2]
    d2=m[0][2]+m[1][1]+m[2][0]
    for i in range(3):
        if "".join(m[i])=="OOO" or "".join(t[i])=="OOO" or d1=="OOO" or d2=="OOO":
            return "O wins"
        elif "".join(m[i])=="XXX" or "".join(t[i])=="XXX" or d1=="XXX" or d2=="XXX":
            return "X wins"
    return "Draw"
