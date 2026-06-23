/*
Problem:
Maximum Number of People Defeated

Link:
https://www.geeksforgeeks.org/problems/killing-spree3020/1

Difficulty:
Unknown

Language:
JavaScript

Author:
shivamgupta4880

*/

class Solution {
    int maxPeopleDefeated(int p) {
        // code here
         int i=0;
         while(p>=(i*i)){
             p-=(i*i);
             i++;
         }
       return  --i;
         
    }
};
