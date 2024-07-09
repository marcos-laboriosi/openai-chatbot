import { pathsToModuleNameMapper } from 'ts-jest';
import tsconfig from './tsconfig.paths.json' with { type: 'json' };

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/src/mocks/svgMock.tsx',
    ...pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
    prefix: '<rootDir>/src/',
  })},
  transform: {
    ".+\\.(css|scss|png|jpg|webp)$": "jest-transform-stub"
  },
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>'],
};
