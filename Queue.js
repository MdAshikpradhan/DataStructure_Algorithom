// In the name of Allah 
// There is no God but Allah and Mohammad (S) is the Messanger of Allah.
class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(item) {
         this.queue.push(item);
    }
    dequeue() {
        if(this.queue.length) {
            return this.queue.shift()
        }
    }
}

const brothers = new Queue();

brothers.enqueue('Alif')
brothers.enqueue('Mahim')
brothers.enqueue('Sidan')
brothers.enqueue('Shakin')

console.log(brothers.queue);

const removeBrother = brothers.dequeue();

console.log(removeBrother);