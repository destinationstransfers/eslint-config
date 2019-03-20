'use strict';

module.exports = {
  rules: require('./rules'),
  configs: {
    recommended: {
      extends: ['./config.js'],
      rules: {
        // custom rules
        '@destinationstransfers/unescaped-html-literal': 'error',
        '@destinationstransfers/prefer-early-return': 'error',
        '@destinationstransfers/prefer-class-properties': 'warn',
      },
    },
  },
};
