/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',

  // Where your tests live
  roots: ['<rootDir>/src'],

  // Transform TS/TSX with ts-jest
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },

  // Tell Jest what to do with non-JS imports like SCSS
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/jest.styleMock.js',
  },

  // Optional: less noisy stack traces
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
