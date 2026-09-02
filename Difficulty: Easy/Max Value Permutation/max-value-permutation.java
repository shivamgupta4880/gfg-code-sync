class Solution {

    int maxValue(int arr[]) {
        // Complete the function
        Arrays.sort(arr);
        int sum=0;
        for(int i=0;i<arr.length;i++){
            sum+=arr[i]*i;
        }
        return sum;
    }
}
