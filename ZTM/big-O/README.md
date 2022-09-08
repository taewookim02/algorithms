# Big O Cheat Sheet:

## -Big Os-

<strong>O(1)</strong> Constant- no loops<br>
<strong>O(log N)</strong> Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search) O(n) Linear- for loops, while loops through n items<br>
<strong>O(n log(n))</strong> Log Liniear- usually sorting operations<br>
<strong>O(n^2)</strong> Quadratic- every element in a collection needs to be compared to ever other element. Two nested loops<br>
<strong>O(2^n)</strong> Exponential- recursive algorithms that solves a problem of size N<br>
<strong>O(n!)</strong> Factorial- you are adding a loop for every element<br><br>
Iterating through half a collection is still O(n)<br>
Two separate collections: O(a \* b)

## What can cause time in a function?

Operations (+, -, \*, /) Comparisons (<, >, ==)
Looping (for, while)
Outside Function call (function())

## -Rule Book-

Rule 1: Always worst Case <br>
Rule 2: Remove Constants <br>
Rule 3: Different inputs should have different variables. O(a+b).
A and B arrays nested would be O(a\*b)<br>
Rule 4: Drop Non-dominant terms

## -What causes Space complexity?-

Variables
Data Structures Function Call Allocations
