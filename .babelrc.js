module.exports = {
  presets: [
    "@babel/preset-typescript",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  env: {
    cjs: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
    test: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
  },
};
