/*
Problem:
Today's GFG POTD Solution ✅ in O(1)

Link:
https://www.geeksforgeeks.org/problems/reverse-coding2452/1

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

        // code herei
        int sum=0;
        for(int i=1;i<=n;i++){
            sum+=i;
        }
        System.out.println(sum+ "");
        
    }
}
