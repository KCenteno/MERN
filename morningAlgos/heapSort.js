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
}

const myHeap = new MinHeap();

myHeap.add(4);
myHeap.add(2);
myHeap.add(90);
myHeap.add(1);
myHeap.add(35);
myHeap.add(46);
myHeap.add(67);
myHeap.add(24);
myHeap.add(999);
myHeap.add(10);
myHeap.add(6);
myHeap.add(34);
myHeap.add(234);
myHeap.add(-10);

console.log(myHeap.min());