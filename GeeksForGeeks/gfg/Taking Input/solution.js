/*
Problem:
Taking Input

Link:
https://www.geeksforgeeks.org/problems/taking-input/1

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
        String s = sc.nextLine();
        int n=sc.nextInt();
        float f=sc.nextFloat();
        int ff= (int)Math.floor(f); // To Store floor of float variable f

        // code here
        

        System.out.println(s);
        System.out.println(n);
        System.out.println(ff);
    }
}
