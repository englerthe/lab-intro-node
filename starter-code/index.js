class SortedList {
    constructor() {
      this.items = [];
      this.length = 0;
    }
    add(item) {
      this.items.push(item);
      this.length ++;
      this.items.sort((a, b) => { return a - b;});
    }
    get(pos) {
      if (pos < this.items.length){
      return this.items[pos];
      } else {
        return;
      }
    }
    max() {
      if (this.items.length == 0) {
        throw new Error("EmptySortedList");
      } else {
        return this.items[(this.length-1)];
      }
    }
    min() {
      if (this.items.length == 0) {
        throw new Error("EmptySortedList");
      } else {
        return this.items[0];
      }
    }
    average() {
      if (this.items.length == 0) {
        throw new Error("EmptySortedList");
      } else {
        return this.items.reduce((a,b) => a + b) / this.items.length;
      }
    }
    sum() {
      if (this.items.length == 0) {
        return 0;
      } else {
        return this.items.reduce((a,b) => a + b);
      }
    }
  };
  
  module.exports = SortedList;