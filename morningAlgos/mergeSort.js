// combine two pre_sorted arrays into one sorted array
// return the newly combined array
// bonus challenge: combine in place into leftArr instead of new array

function combine(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [...arr, ...left, ...right]
}


// should return [0,1,2,3,4,6,7,9,11]
// console.log(combine([1,2,7,9],[0,3,4,6,11]))

// should return [0,1]
// console.log(combine([1],[0]))

const mergeSort = (arr) => {
    console.log(arr);
    if(arr.length <= 1) return arr;

    let leftArr = arr.slice(0, Math.floor(arr.length/2));
    let rightArr = arr.slice(Math.floor(arr.length/2));

    leftArr = mergeSort(leftArr);
    rightArr = mergeSort(rightArr);
    arr = combine(leftArr,rightArr);
    console.log(`combined: ${arr}`);
    return arr;
}

//should return [1,2,3,4,5,6,8,14]
console.log(mergeSort([5,4,2,6,8,14,1,3,11]));