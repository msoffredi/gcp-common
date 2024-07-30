// eslint-disable-next-line no-undef
module.exports = {
    preset: 'ts-jest',
    modulePathIgnorePatterns: ['<rootDir>/__tests__/utils'],
    clearMocks: true,
    collectCoverageFrom: ['src/**/*.{ts,js}'],
};
