/*
 * Destinations Transfers Shareable ESLint Config:
 * http://eslint.org/docs/developer-guide/shareable-configs
 */

'use strict';

module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:node/recommended',
    'plugin:sonarjs/recommended',
    'plugin:promise/recommended',
  ],
  env: {
    es6: true,
    jest: true,
    'jest/globals': true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: [
    'dependencies',
    'eslint-comments',
    'import',
    'jest',
    'jsdoc',
    'lit',
    'node',
    'optimize-regex',
    'prettier',
    'promise',
    'sonarjs',
    'sort-requires',
    'unicorn',
  ],
  rules: {
    // code quality
    complexity: ['error', { max: 20 }],
    // sonar complexity is greater than eslint
    'sonarjs/cognitive-complexity': ['error', 30],
    'sonarjs/no-duplicate-string': 'warn',
    'node/exports-style': ['warn', 'module.exports'],
    'max-lines': [
      'warn',
      { max: 600, skipComments: true, skipBlankLines: true },
    ],
    'max-depth': ['error', 4],
    'max-params': ['error', 4],
    'max-statements': ['error', 30, { ignoreTopLevelFunctions: true }],
    'max-nested-callbacks': ['error', 3],
    'no-warning-comments': [
      'warn',
      { terms: ['todo', 'fixme', 'future'], location: 'start' },
    ],
    'optimize-regex/optimize-regex': 'warn',
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    // language features
    'accessor-pairs': ['error', { setWithoutGet: true }],
    'getter-return': 'error',
    'arrow-parens': 'off',
    'guard-for-in': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'valid-jsdoc': 'off',
    'no-extra-bind': 'error',
    'no-sync': 'warn',
    'no-confusing-arrow': 'off',
    'require-await': 'error',
    'no-restricted-syntax': 'off',
    'no-throw-literal': 'error',
    'no-restricted-globals': 'off',
    'spaced-comment': 'off',
    camelcase: 'off',
    'no-continue': 'off',
    // presentation
    'sort-requires/sort-requires': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],
    'sort-vars': ['error', { ignoreCase: true }],
    'no-underscore-dangle': 'off', // MongoDB is hard with it
    // jest
    'jest/no-disabled-tests': 'off', // will allow test.skip
    'jest/prefer-spy-on': 'off', // buggy
    'jest/no-identical-title': 'error',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/valid-expect': 'error',
    'jest/prefer-to-contain': 'error',
    // Prettier
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: true,
      },
    ],
    // eslint-plugin-jsdoc - https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-configuration
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-tag-names': 'error',
    'jsdoc/newline-after-description': ['warn', 'always'],
    'jsdoc/no-undefined-types': 'warn',
    'jsdoc/require-description': 'off',
    'jsdoc/require-description-complete-sentence': 'off',
    'jsdoc/require-example': 'off',
    'jsdoc/require-hyphen-before-param-description': 'error',
    'jsdoc/require-param': 'error',
    'jsdoc/require-param-description': 'warn',
    'jsdoc/require-param-name': 'error',
    'jsdoc/require-param-type': 'error',
    'jsdoc/require-returns-description': 'warn',
    'jsdoc/require-returns-type': 'error',
    'jsdoc/require-returns-check': 'error',
    'jsdoc/check-types': 'warn',
    'jsdoc/valid-types': 'warn',
    // lit-html rules for html`<body></body> template literals - https://github.com/43081j/eslint-plugin-lit
    'lit/no-duplicate-template-bindings': 'error',
    'lit/no-template-bind': 'error',
    'lit/no-template-map': 'warn',
    'lit/no-useless-template-literals': 'error',
    'lit/attribute-value-entities': 'error',
    'lit/no-invalid-html': 'error',
    // unicorn - https://www.npmjs.com/package/eslint-plugin-unicorn
    'unicorn/throw-new-error': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/no-unused-properties': 'warn',
    'unicorn/catch-error-name': [
      'error',
      {
        name: 'error',
      },
    ],
    // others
    'node/no-unpublished-require': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    'dependencies/case-sensitive': 'error',
    'dependencies/no-cycles': 'error',
    'import/no-cycle': 'error',
    'import/named': 'error',
    'import/default': 'error',
    'import/no-default-export': 'warn',
    'dependencies/no-unresolved': 'error',
    'dependencies/require-json-ext': 'off',
    // eslint comments
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/disable-enable-pair': 'off',
  },
  overrides: [
    {
      files: ['__tests__/*.js', '*.test.js'],
      env: {
        jest: true,
        browser: true,
      },
      rules: {
        // we need unused vars in tests for mocking sometimes
        'no-unused-vars': 'warn',
        // it's ok to write very long integration tests
        'max-statements': 'off',
      },
    },
  ],
};
