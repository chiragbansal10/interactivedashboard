// // module.exports = {
// //     testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
// //     setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
// //     testEnvironment: 'jsdom',
// //   };
// // module.exports = {
// //     testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
// //     setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
// //     testEnvironment: 'jsdom',
// //     transform: {
// //       '^.+\\.(ts|tsx)$': 'babel-jest',
// //     },
// //     moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
// //   };
// module.exports = {
//   testEnvironment: 'jsdom', // Set the test environment to jsdom
//   transform: {
//     '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest', // Ensure Babel is used for transpiling files
//   },
//   moduleNameMapper: {
//     '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS/SCSS imports
//   },
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Ensure any necessary setup files are included
//   testPathIgnorePatterns: ['/node_modules/', '/.next/'], // Ignore unnecessary directories
// };
// module.exports = {
//   testEnvironment: 'jsdom',
// };
// module.exports = {
//   testEnvironment: 'jsdom',
//   setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
// };
// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'jsdom',
//   moduleFileExtensions: ['ts', 'tsx', 'js'],
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
// };
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // Use jsdom to simulate the browser environment
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // To compile TypeScript
  },
};
