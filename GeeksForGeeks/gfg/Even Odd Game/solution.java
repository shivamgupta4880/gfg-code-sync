/*
Problem:
Even Odd Game

Link:
https://www.geeksforgeeks.org/problems/even-odd-game--153136/1

Difficulty:
Unknown

Language:
Java

Author:
shivamgupta4880

*/

import java.util.Scanner;

class GFG {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        // code here
        if(n%2==0){
            System.out.println("Friend");
        }else
        System.out.println("You");

        sc.close();
    }
}
