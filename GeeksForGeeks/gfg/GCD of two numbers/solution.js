/*
Problem:
GCD of two numbers

Link:
https://www.geeksforgeeks.org/problems/gcd-of-two-numbers3459/1

Difficulty:
Unknown

Language:
JavaScript

Author:
shivamgupta4880

*/

class Solution {
    public static int gcd(int a, int b) {
        if(a==0)return b;
        return gcd(b%a,a);
        
       
    }
}
