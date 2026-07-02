/*
Problem:
Largest in Array

Link:
https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1

Difficulty:
Unknown

Language:
JavaScript

Author:
shivamgupta4880

*/

class Solution {
    public static int largest(int[] arr) {
        // code here
        Arrays.sort(arr);
        return arr[arr.length-1];
    }
}
