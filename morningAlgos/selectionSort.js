// like bubble sort, but a lttle better.
// on first loop, searches for lowest value
// when finished, swaps lowest value for value at 0 index
// on second loop, searches for second lowest value, then
// swap with value at 1 index
// continue this pattern until whole array is sorted
function selectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr);
        console.log(`checking to find the ${i+1}th smallest value`)
        var mindex = i;
        for(var j = i; j < arr.length; j++){
            if(arr[j] < arr[mindex]){
                mindex = j
            }
        }
        var temp = arr[i];
        arr[i] = arr[mindex]
        arr[mindex] = temp
    }
    return arr;
}
console.log(selectionSort([5,4,2,6,8,14,1,3]))
