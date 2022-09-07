enum Direction {
  Up = "Upp",
  Down = "Ner",
  Left = "Vänster",
  Right = "Höger",
}

console.log(Object.values(Direction)); // [ 'Upp', 'Ner', 'Vänster', 'Höger' ]

type Game = {
  [k in keyof Direction]: boolean;
};

const game: Game = {};

console.log("game", game);
