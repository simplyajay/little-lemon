// jest.config.cjs
const path = require("path");

module.exports = {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  setupFilesAfterEnv: [path.resolve(__dirname, "src/setupTests.js")],
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": path.resolve(
      __dirname,
      "src/__mocks__/styleMock.js"
    ),
  },
};
