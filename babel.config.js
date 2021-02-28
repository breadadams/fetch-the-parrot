module.exports = (api) => {
  const isTest = api.env("test");

  if (isTest) {
    return {
      presets: [
        "@babel/preset-typescript",
        ["@babel/preset-env", { targets: { node: "current" } }],
      ],
    };
  }

  return {};
};
