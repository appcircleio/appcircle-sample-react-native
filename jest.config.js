module.exports = {
  preset: '@testing-library/react-native',
  setupFilesAfterEnv: [
    './node_modules/@testing-library/jest-native/extend-expect',
    './jest-setup.ts',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/e2e/', // Ignore e2e folder for unit tests
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}', // Adjust this to match your source directory
    '!**/node_modules/**',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text', 'json'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',

    // For pnpm you need to use inlcude `(?!(?:.pnpm/)?` part like this:
    // 'node_modules/(?!(?:.pnpm/)?((jest-)?@?react-native|@react-native-community|@react-navigation))',
  ],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './test-reports',
        outputName: 'junit-report.xml',
      },
    ],
  ],
};
