/*
Problem:
Selection Sort

Link:
https://www.geeksforgeeks.org/problems/selection-sort/1

Difficulty:
Unknown

Language:
Java

Author:
shivamgupta4880

*/

class Solution {
    void selectionSort(int[] arr) {
        // code here
        int n =arr.length;
        for(int i=0; i<n;i++){
            int min=Integer.MAX_VALUE;
            int mindex=-1;
            for(int j=i;j<n;j++){
                if(arr[j]<min){
                    min =arr[j];
                    mindex=j;
                }
                
            }
            int temp = arr[i];
            arr[i]=arr[mindex];
            arr[mindex]=temp;
        }
    }
}
