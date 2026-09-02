class Solution {
    void selectionSort(int[] arr) {
        // code here
        int n=arr.length;
        for(int i=0;i<n-1;i++){
            int min = Integer.MAX_VALUE,  mindex=i;
            for(int j=i+1;j<n;j++){
                if(arr[j]<arr[mindex]){
                    
                    mindex=j;
                }
            }
            int temp =arr[i];
            arr[i]=arr[mindex];
            arr[mindex]=temp;
        }
    }
}