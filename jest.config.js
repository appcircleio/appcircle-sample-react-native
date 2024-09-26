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
