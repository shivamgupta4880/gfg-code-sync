# class Solution { public: char getMaxOccuringChar(string& s) { // code here int count[26] = {0}; for(int i=0 ; i<s.size() ; i++) { count[s[i]-'a']++; } int ansIndex = 0; int freq = count[0]; for(int i= 0 ; i<26 ; i++) { if(count[i]>freq) { freq = count[i]; ansIndex = i; } } char ans = 'a' +ansIndex; return ans; }};

## Problem Link
[GeeksforGeeks Link](https://www.geeksforgeeks.org/problems/maximum-occuring-character-1587115620/1)

---

## Difficulty
**Unknown**

---

## Tags
- Expected Complexities
- Flipkart
- Topic TagsStringsData Structures
- Topic Tags
- Strings
- Data Structures

---

## Company Tags
None

---

## Problem Statement
Given a string **s **of lowercase alphabets. The task is to find the maximum occurring character in the string **s**. If more than one character occurs the maximum number of times then print the lexicographically smaller character.

**Examples:**

```
**Input: **s = "testsample"
**Output:** 'e'
Explanation: 'e' is the character which is having the highest frequency.
```

```
**Input: **s = "output"
**Output: **'t'
Explanation: 't' and 'u' are the characters with the same frequency, but 't' is lexicographically smaller.
```

**Constraints:**
1 ≤ |s| ≤ 100

---

## Constraints
1 ≤ |s| ≤ 100

---

## Expected Time Complexity
O(n)

---

## Expected Space Complexity
O(n)
