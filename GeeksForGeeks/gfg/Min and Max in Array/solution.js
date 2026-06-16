/*
Problem:
Min and Max in Array

Link:
https://www.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1

Difficulty:
Unknown

Language:
JavaScript

Author:
shivamgupta4880

*/

class Solution {
    public ArrayList<Integer> getMinMax(int[] arr) {
        // code Here
        ArrayList<Integer>  reuslt=new ArrayList<>();
        int min=arr[0];
        int max=arr[0];
        for(int i=1;i<arr.length;i++){
            if(arr[i]<min){
                min=arr[i];
            }
            if(arr[i]>max){
                max=arr[i];
                
            }
        }
        reuslt.add(min);
        reuslt.add(max);
        return reuslt;
        
        
    }
}
