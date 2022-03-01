var MinStack = function () {
  this.stack = new Stack();
  this.minStack = new Stack();
};

MinStack.prototype.push = function (val) {
  this.stack.push(val);

  if (this.minStack.empty() || val <= this.minStack.peek()) {
    this.minStack.push(val);
  }
};

MinStack.prototype.pop = function () {
  let removed = this.stack.pop();

  if (removed === this.minStack.peek()) this.minStack.pop();
};

MinStack.prototype.top = function () {
  return this.stack.peek();
};

MinStack.prototype.getMin = function () {
  return this.minStack.peek();
};

//Implement a stack

//Last in, first out LIFO

class Stack {
  constructor() {
    this.storage = {};
    this.size = 0; //0: 'a', 1: 'b' etc..
  }
  push(val) {
    this.storage[this.size] = val;
    this.size++;
  }
  pop() {
    let top = this.storage[this.size - 1];
    delete this.storage[this.size];
    this.size--;
    return top;
  }
  peek() {
    return this.storage[this.size - 1];
  }
  empty() {
    return this.getSize() === 0;
  }
  getSize() {
    return this.size;
  }
}
