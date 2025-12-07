""" 01-12-2025: Miles to Kilometers
Given a distance in miles as a number, return the equivalent distance in kilometers.

The input will always be a non-negative number.
1 mile equals 1.60934 kilometers.
Round the result to two decimal places. """

def convert_to_km(miles):
    return round(1.60934*miles,2)

""" 02-12-2025: Camel to Snake
Given a string in camel case, return the snake case version of the string using the following rules:

The input string will contain only letters (A-Z and a-z) and will always start with a lowercase letter.
Every uppercase letter in the camel case string starts a new word.
Convert all letters to lowercase.
Separate words with an underscore (_). """

def to_snake(c):
    ind=[0]
    res=[]
    for i in range(len(c)):
        if c[i].isupper():
            ind.append(i)
    ind.append(len(c))
    for i in range(1,len(ind)):
        res.append(c[ind[i-1]:ind[i]].lower())
    return "_".join(res)

""" 03-12-2025: Markdown Ordered List Item Converter
Given a string representing an ordered list item in Markdown, return the equivalent HTML string.

A valid ordered list item in Markdown must:

Start with zero or more spaces, followed by
A number (1 or greater) and a period (.), followed by
At least one space, and then
The list item text.
If the string doesn't have the exact format above, return "Invalid format". Otherwise, wrap the list item text in li tags and return the string.

For example, given "1. My item", return "<li>My item</li>". """

import re
def convert_list_item(md):
    x=re.split("[1-9]\.",md);
    res=""
    for el in x:
        el=el.strip()
        if el=="":
            el="<li>"
        res+=el
    res+="</li>"
    if len(x)>1:
        return res
    else:
        return "Invalid format"
    

""" 04-12-2025: Permutation Count
Given a string, return the number of distinct permutations that can be formed from its characters.

A permutation is any reordering of the characters in the string.
Do not count duplicate permutations.
If the string contains repeated characters, repeated arrangements should only be counted once.
The string will contain only letters (A-Z, a-z).
For example, given "abb", return 3 because there's three unique ways to arrange the letters: "abb", "bab", and "bba". """

def factorial(n):
    if n<=1:
        return 1
    else:
        return n*factorial(n-1)

def count_permutations(s):
    sn=factorial(len(s))
    l=list(set(list(s)))
    for i in range(len(l)):
        sp=s.split(str(l[i]))
        sn/=factorial(len(sp)-1)
    return sn

""" 05-12-2025 Symmetric Difference
Given two arrays, return a new array containing the symmetric difference of them.

The symmetric difference between two sets is the set of values that appear in either set, but not both.
Return the values in the order they first appear in the input arrays. """

def difference(arr1, arr2):
    res=[]
    for c in arr1:
        if not c in arr2:
            res.append(c)
    for c in arr2:
        if not c in arr1:
            res.append(c)
    return res

""" 06-12-2025: Date Formatter
Given a date in the format "Month day, year", return the date in the format "YYYY-MM-DD".

The given month will be the full English month name. For example: "January", "February", etc.
In the return value, pad the month and day with leading zeros if necessary to ensure two digits.
For example, given "December 6, 2025", return "2025-12-06". """

def format_date(date_string):
    sp=date_string.split(" ")
    conv={"January":"01","February":"02","March":"03","April":"04","May":"05","June":"06","July":"07","August":"08","September":"09","October":"10","November":"11","December":"12"}
    p1=sp[0];
    p2=sp[1].replace(",","")
    if int(p2)<10:
      d="0"+p2
    else:
      d=p2
    return sp[2]+"-"+conv[p1]+"-"+d
    
""" 07-12-2025: String Compression
Given a string sentence, return a compressed version of the sentence where consecutive duplicate words are replaced by the word followed with the number of times it repeats in parentheses.

Only consecutive duplicates are compressed.
Words are separated by single spaces.
For example, given "yes yes yes please", return "yes(3) please". """

def compress_string(s):
    d={}
    sp=s.split(" ")
    for i in range(len(sp)):
        if sp[i] in d.keys():
            d[sp[i]]+=1
        else:
            d[sp[i]]=1
    r=list(d.keys())
    res=[]
    for i in range(len(r)):
        stri=(r[i]+"("+str(d[r[i]])+")").replace("(1)","")
        res.append(stri)
    return " ".join(res)
