/*
Problem:
Rotate Array

Link:
https://www.geeksforgeeks.org/problems/rotate-array-by-n-elements-1587115621/1

Difficulty:
Unknown

Language:
JavaScript

Author:
shivamgupta4880

*/

class Solution {
    static void rotateArr(int arr[], int d) {
        // code her\
        int n= arr.length;
        d%=n;
        revers(arr, 0, d-1);
        revers(arr, d, n-1);
        revers(arr, 0, n-1);
        
        
        
        
    }static void revers(int arr[], int i,int j){
        while(i<j){
            int temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            i++;
            j--;
        }
    }
    
}
