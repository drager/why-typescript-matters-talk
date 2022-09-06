const items = [1, 2, 3];
items.push(102);
items[0] = 101;

const point = { x: 10, y: 20 };

point.x = 20;
point.y = 40;

const readonlyItems: ReadonlyArray<number> = [1, 2, 3];

readonlyItems.push(230);
readonlyItems[0] = 100;




type ReadonlyPoint = {
  readonly x: number;
  readonly y: number;
};

const readonlyPoint: ReadonlyPoint = { x: 10, y: 20 };

readonlyPoint.x = 40;
