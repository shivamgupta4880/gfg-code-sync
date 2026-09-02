class Solution {
    public long[] findElements(long arr[]) {
        // code here
        Arrays.sort(arr);
        long[] reuslt=new long[arr.length-2];
        for(int i=0;i<reuslt.length;i++){
            reuslt[i]=arr[i];
        }
        return reuslt;
    }
}