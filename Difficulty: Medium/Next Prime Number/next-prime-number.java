class Solution {
    public static int nextPrime(int n) {

        // code here to find next prime number
   for(int i=n+1;i<n*n;i++)
       {
           boolean flag=true;

           for(int j=2;j*j<=i;j++)
               {
                   if (i%j==0) 
                       flag=false;
               }

           if(flag==true)
               {
                   return(i);
               }
       }
       return(2);

   }

}