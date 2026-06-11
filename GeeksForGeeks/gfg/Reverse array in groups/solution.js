/*
Problem:
Reverse array in groups

Link:
https://www.geeksforgeeks.org/problems/reverse-array-in-groups0255/1

Difficulty:
Unknown

Language:
JavaScript

Author:
shivamgupta4880

*/

class Solution {
    public void reverseInGroups(int[] arr, int k) {
        int n = arr.length;

        for (int i = 0; i < n; i += k) {
            int left = i;
            int right = Math.min(i + k - 1, n - 1);

            while (left < right) {
                int temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;

                left++;
                right--;
            }
        }
    }
}
