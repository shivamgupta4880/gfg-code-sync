/*
Problem:
Decision Making

Link:
https://www.geeksforgeeks.org/problems/decision-making/1

Difficulty:
Unknown

Language:
JavaScript

Author:
shivamgupta4880

*/

import java.util.Scanner;

class GFG {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();

        // code here
        if(n<m){
            System.out.println("less");
        }
        else if(n==m){
            System.out.println("equal");
        }else if(n>m){
             System.out.println("greater");
        }
        }
}
