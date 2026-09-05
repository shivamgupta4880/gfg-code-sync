class Solution {
public void calculate(int a, int b, int optr) {
    // code here
    if(optr==1){
      System.out.print(a+b);
    }else if(optr==2){
         System.out.print(a - b);
        
    }else if(optr==3){
         System.out.print(a * b);
    }else{
        System.out.print("Invalid Input");
    }
}
}