class MinHeap {
    constructor(){
        this.heap = [null];
    }

    add(val){
        this.heap.push(val);
        this.shiftUp();
    }

    shiftUp(){
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex/2);

        while(this.heap[parentIndex] > this.heap[currentIndex] && currentIndex !== 1){
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = this.heap[currentIndex];
            this.heap[currentIndex] = temp;

            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex/2);
        }

    }

    min(){
        return this.heap.length < 2 ? null : this.heap[1];
    }
    // We Always remove the top value (the value located at index 1)
    remove(){
        // Scenario 1: the heap is empty
        // How do we know if the heap is empty
        // It should have a langth of less then 2 (to account for the null)
        if(this.heap.length < 2) return null;
        // Scenario 2: there is only 1 value
        // if there is only one value we have nothing left to shift up after the value is removed
        const min = this.heap[1];
        if(this.heap.length === 2){
            this.heap.pop();
            return min;
        }
        // Scenario 3: there are values left after the min is removed
        // We need to put the last value in the heap at the front of the heap
        // this.heap[1] = this.heap[this.heap.length-1] and then pop the value after
        this.heap[1] = this.heap.pop();
        // At the very end I will want to return he value I got
        // The   final step is to shift the value down to its proper location
        this.shiftDown();
        return min;
    }

    shiftDown(){
        // Take the top value and shift it down until its in its proper place (both children are larger than it)
        // We need to keep track of the index where our shifted value is located
        let idxToShiftDown = 1;
        // We need to keep track of the left value
        let leftIdx = idxToShiftDown * 2;
        // We need to check if there is a left to look at
        while(leftIdx < this.heap.length){
            // store the right index because we might need it
            let rightIdx = leftIdx + 1;
            // we need to figure out which is the smallest
            let idxOfSmallest = leftIdx;
            // Should i replace that with the right index?
            if(rightIdx < this.heap.length && this.heap[rightIdx] < this.heap[leftIdx]){
                idxOfSmallest = rightIdx;
            }
            // We need to see if a swap needs to happen - is the parent value smaller then the child?
            if(this.heap[idxToShiftDown] <= this.heap[idxOfSmallest]){
                // This mean the parent index is in the right place and no action needs to be taken
                console.log("The value to shift down has found its home, breaking out of the function");
                break;
            }
            // The parent value was LARGER  and needs to be swapped with a smaller value
            console.log("Have not found its home yet, swapping with a smaller value")
            // Time to swap the values
            let temp = this.heap[idxToShiftDown]
            this.heap[idxToShiftDown] = this.heap[idxOfSmallest];
            this.heap[idxOfSmallest] = temp;
            // Our value we are moving down the heap has shifted and we need to track that
            idxToShiftDown = idxOfSmallest;
            // We need to reset our left
            leftIdx = idxToShiftDown * 2;
        }
    }
}

const myHeap = new MinHeap();

myHeap.add(4);
myHeap.add(18);
myHeap.add(90);
myHeap.add(2000);
myHeap.add(3);
// myHeap.add(35);
// myHeap.add(46);
// myHeap.add(67);
// myHeap.add(24);
// myHeap.add(999);
// myHeap.add(10);
// myHeap.add(6);
// myHeap.add(34);
// myHeap.add(234);
// myHeap.add(-10);

console.log(myHeap.remove());
console.log(myHeap.min());