const enum Color2 {
  R = "red",
  G = "green",
  B = "blue",
}

const getColor = (color: Color): string => {
  switch (color) {
    case Color.Red:
      return "#FF0000";
    case Color.Green:
      return "#00FF00";
    case Color.Blue:
      return "#0000FF";
  }
};
