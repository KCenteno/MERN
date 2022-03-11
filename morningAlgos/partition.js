//partition the array around the value at arr[0]
//without creating a new array
//values left of the original pivot should be less than the pivot
//values right of the pivot should be >= the pivot value
//note: each side of the partitioned value does not
//have to be sorted.
//return the partitioned array
//bonus: return the index where the value at 0 ends up
//[5,4,9,2,5,3] -> [4,2,3,5,9,5], return 3

const partition = (arr) => {
    let pivot = 0
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[pivot]){
            console.log("move this value backward: " + arr[i]);
            for(let j = i; j > pivot; j--){
                let temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
            pivot++;
            console.log(arr);
        }  
    }
    console.log("pivot value: " + arr[pivot]);
    return arr;
}

//should return [4,2,3,5,9,5]
console.log(partition([5,4,9,2,5,3]));
// should return [4,7]
// console.log(partition([7,4]));
// should return [2,1,3,4,5]
// console.log(partition([3,,5,1,2,4]));

// console.log(partition([7,2,10,15,1]));


// const partition = (arr) => {
//     var pivot= arr[0]
//     for(i=1; i<arr.length; i++){
//         if (arr[i] < pivot){
//             var temp= arr[i]
//             arr.splice(i,1)
//             arr.unshift(temp)
//         }
//     }
//     console.log(arr.indexOf(pivot))
//     return arr
// }