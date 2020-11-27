module.exports = {
  "setupFilesAfterEnv": ["./tests/jest/globals.js"],
  "moduleNameMapper": {
    "src/(.*)": "<rootDir>/src/$1"
  }
}