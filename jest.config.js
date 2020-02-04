module.exports = {
    verbose: true,
    testRegex: '(/__tests__/.*(test))\\.js$',
    collectCoverage: true,
    collectCoverageFrom: [
        'lib/**/*.js',
        '!**/node_modules/**',
        '!**/__test__/**',
        '!**/resources/*',
        '!jest.config.js',
    ],
    testEnvironment: 'node'
}