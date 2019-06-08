module.exports = {
  collectCoverageFrom: [
    "app/**/*.{js,jsx}",
    "!app/**/*.test.{js,jsx}",
    "!app/*/RbGenerated*/*.{js,jsx}",
    "!app/app.js",
    "!app/*/*/Loadable.{js,jsx}"
  ],
  coverageReporters: ["json", "lcov", "text-summary"],
  moduleDirectories: ["node_modules", "app"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  transform: {
    "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
    "\\.(ts|tsx)$": "ts-jest"
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  moduleNameMapper: {
    ".*\\.(css|less|styl|scss|sass)$":
      "<rootDir>/config/jest-mocks/cssModule.js",
    ".*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/config/jest-mocks/image.js"
  },
  setupTestFrameworkScriptFile: "<rootDir>/config/test-setup.js",
  preset: "ts-jest/presets/js-with-babel"
};
