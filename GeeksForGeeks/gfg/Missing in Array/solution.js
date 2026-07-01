/*
Problem:
Missing in Array

Link:
https://www.geeksforgeeks.org/problems/missing-number-in-array1416/1

Difficulty:
Unknown

Language:
JavaScript

Author:
shivamgupta4880

*/

class Solution {
    int missingNum(int arr[]) {
        // code here
        int n= arr.length, xor=0;
        for(int a:arr) xor^=a;
        for(int i=0;i<=n+1;i++)xor^=i;
        return xor;
        
    }
}
