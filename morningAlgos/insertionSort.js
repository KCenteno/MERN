//looping through the array from 0 to arr.length,
//shift a value in the array back to the place it belongs
//the value to shift should increment with each loop iteration
//follow this example for each step, with the current value in ()
//step one: [(6),4,5,2,8,14,1,3] -> [(6),4,5,2,8,14,1,3]
//step two: [6,(4),5,2,8,14,1,3] -> [(4),6,5,2,8,14,1,3]
//step three: [4,6,(5),2,8,14,1,3] -> [4,(5),6,2,8,14,1,3]
//step four: [4,5,6,(2),8,14,1,3] -> [(2),4,5,6,8,14,1,3]
//step five: [2,4,5,6,(8),14,1,3] -> [2,4,5,6,(8),14,1,3]
//and so on...
const insertionSort = (arr) => {
    ///Pseudocode:
    //for loop to iterate through each number starting at index 0 to arr.length
    //temp value to capture value of current index
    //loop through previous index to compare values and find correct spot using if statement
    //2 while loops to push values backwards and forwards depending on spot until end of loop
    for( let i = 1; i < arr.length; i++){
        for( let j = i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                console.log(`${arr[i]}`)
                console.log(`${arr}`)
                let temp = arr[j];
                console.log(`The temp is ${temp}`)
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
        }
    }
    return arr;
}


console.log(insertionSort([6,4,5,2,8,14,1,3]));