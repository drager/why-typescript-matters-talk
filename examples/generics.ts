const reverse = <T>(items: Array<T>) =>
  items.map((_item, index) => items[items.length - 1 - index]);

console.log(reverse([1, 2, 3, 4]));
