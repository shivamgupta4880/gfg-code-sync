/*
Problem:
The FizzBuzz Program

Link:
https://www.geeksforgeeks.org/problems/the-fizzbuzz-program/1

Difficulty:
Unknown

Language:
JavaScript

Author:
shivamgupta4880

*/

class Solution {
    public static void fizzBuzz(int number) {
        // code here.
        if(number%3==0 && number%5==0){
            System.out.println("FizzBuzz");
        }else if(number%3==0){
            System.out.println("Fizz");
        }
        else if(number%5==0){
            System.out.println("Buzz");
        }
        else{
                        
        System.out.println(number);

        }
    }
}
