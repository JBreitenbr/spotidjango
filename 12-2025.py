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

