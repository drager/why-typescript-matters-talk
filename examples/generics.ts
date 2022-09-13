function reverse<T>(items: Array<T>): Array<T> {
  return items.map((_item, index) => items[items.length - 1 - index]);
}

reverse<number>([1, 2, 3, 4, 5]);

reverse<string>(["A", "B", "C", "D", "E"]);


function reverseStrings(items: Array<string>) {
  return items.map((_item, index) => items[items.length - 1 - index]);
}

reverseStrings(["A", "B"]);

function reverseNumbers(items: Array<number>) {
  return items.map((_item, index) => items[items.length - 1 - index]);
}

reverseNumbers([1, 2]);
