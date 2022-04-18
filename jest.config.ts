// jest.config.ts
import type {Config} from '@jest/types';

// Or async function
export default async (): Promise<Config.InitialOptions> => {
  return {
    testEnvironment: 'jsdom',
    verbose: true,
    preset: 'react-native-web',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    modulePathIgnorePatterns: ['<rootDir>/packages/'],
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    transformIgnorePatterns: [
      'node_modules/(?!@react-native|react-native|redux-persist-sensitive-storage)',
    ],
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/assetsTransformer.js',
      '\\.(css|less)$': '<rootDir>/assetsTransformer.js',
      '^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'babel-jest',
    },
    coverageReporters: ['json-summary', 'text', 'text-summary'],
    coverageThreshold: {
      global: {
        lines: 0,
      },
    },
  };
};
