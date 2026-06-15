/*
Problem:
class Solution { public: char getMaxOccuringChar(string& s) { // code here int count[26] = {0}; for(int i=0 ; i<s.size() ; i++) { count[s[i]-'a']++; } int ansIndex = 0; int freq = count[0]; for(int i= 0 ; i<26 ; i++) { if(count[i]>freq) { freq = count[i]; ansIndex = i; } } char ans = 'a' +ansIndex; return ans; }};

Link:
https://www.geeksforgeeks.org/problems/maximum-occuring-character-1587115620/1

Difficulty:
Unknown

Language:
C

Author:
shivamgupta4880

*/

char ans=s.charAt(0);
        char arr[]=s.toCharArray();
        Arrays.sort(arr);
      int  i=0 ,j=0;
      while(j<n){
          if(arr[i]==arr[j]){
              j++;
          }else{
              int freq=j-i;
              if(freq>maxfrex){
                  maxfrex=freq;
                  ans=arr[i];
              }
              i=j;
              
          }
      }
      int freq=j-i;
              if(freq>maxfrex){
                  maxfrex=freq;
                  ans=arr[i];
              }
              return ans;
        /*for(int i=0;i<n;i++){
            int freq=1;
            char ch=s.charAt(i);
            for(int j=i+1;j<n;j++){
                if(s.charAt(j)==ch ){
                    freq++;
                }
                
            }
            if(freq>maxfrex){
                maxfrex=freq;
                ans=ch;
            }
            else if(freq==maxfrex&&ch<ans){
                ans=ch;
