'use strict';

module.exports = {
  rules: require('./rules'),
  configs: {
    recommended: {
      extends: ['./config.js'],
      rules: {
        // custom rules
        '@destinationstransfers/unescaped-html-literal': 'error',
      },
    },
  },
};
