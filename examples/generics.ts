const reverse = <T>(items: Array<T>) =>
  items.map((_item, index) => items[items.length - 1 - index]);

type MySpecialArray<T> = {
  reverse(...items: Array<T[] | T>): T[];
};

const myArray: MySpecialArray<string> = { reverse };


myArray.reverse([1,2,3,4,5])
