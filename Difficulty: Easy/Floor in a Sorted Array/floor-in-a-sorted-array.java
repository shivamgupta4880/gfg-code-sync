class Solution {
    static int findFloor(int[] arr, int x) {
        // code here
        int max=-1;
        for(int i=0;i<arr.length;i++){
            if(x>=arr[i]){
                max=i;
            }
        }
        return max;
    }
}
