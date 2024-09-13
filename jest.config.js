module.exports = {
  preset: '@testing-library/react-native',
  setupFilesAfterEnv: [
    './node_modules/@testing-library/jest-native/extend-expect',
    './jest-setup.ts',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',

    // For pnpm you need to use inlcude `(?!(?:.pnpm/)?` part like this:
    // 'node_modules/(?!(?:.pnpm/)?((jest-)?@?react-native|@react-native-community|@react-navigation))',
  ],
};
