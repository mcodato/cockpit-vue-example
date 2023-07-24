module.exports = {
  moduleFileExtensions: ["js", "ts", "json", "vue"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.js?$": "babel-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!@carbon/.*)"],
};
