module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|jpeg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  moduleDirectories: ['node_modules', 'src'],
  testRegex: '(/__tests__/.*\\\\.spec.(tsx|ts))?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
}
