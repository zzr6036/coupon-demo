module.exports = {
    setupFilesAfterEnv: ["./jest.setup.js"],
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/", "<rootDir>/styles/"],
    moduleNameMapper: {
        "^@components(.*)$": "<rootDir>/components$1",
        "^@pages(.*)$": "<rootDir>/pages$1",
        "^@hooks(.*)$": "<rootDir>/hooks$1",
        '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    },
    testEnvironment: 'jsdom'
};
