module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  automock: false,
  setupFiles: ['./test/setup.ts'],
};
