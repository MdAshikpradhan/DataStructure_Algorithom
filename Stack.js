class Stack {
    constructor() {
        this.stack = [];
    }
    add(item) {
        this.stack.push(item)
    }
    remove() {
        if(this.stack.length) {
            return this.stack.pop()
        }
    }
}

const brothers = new Stack();

brothers.add('Alif')
brothers.add('Shakin')
brothers.add('Sidan')
brothers.add('Mahim')
console.log(brothers)

const removeBrother = brothers.remove()
console.log(removeBrother)
console.log(brothers.stack)