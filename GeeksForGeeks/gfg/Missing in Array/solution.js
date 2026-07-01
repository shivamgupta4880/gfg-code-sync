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
       int n=1+arr.length, 
        i=0;
       while(i<arr.length){
           if(arr[i]==i+1 ||arr[i]==n)i++;
           else{
               int idx =arr[i]-1
               ;swap(arr,i,idx);
           }
          
       }
       for(i=0;i<arr.length;i++){
           if(arr[i]!=i+1)return i+1;
       }
       return n;
        
    }
    private void swap(int arr[], int i,int idx){
        int temp=arr[i];
        arr[i]=arr[idx];
        arr[idx]=temp;
    }
}
