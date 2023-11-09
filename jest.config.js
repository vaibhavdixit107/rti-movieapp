module.exports = {
    // preset: 'js-jest',
    transform: {
    //   '^.+\\.(js|jsx)?$': 'js-jest',
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
  };