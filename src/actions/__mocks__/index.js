module.exports = {
    ...jest.requireActual('..'),
    __esModule: true,
    // TODO: update value for Redux / Context implementation
    getSecretWord: jest.fn().mockReturnValue(Promise.resolve('party')),
};