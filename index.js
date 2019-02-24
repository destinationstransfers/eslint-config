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
    'github',
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
    'no-restricted-syntax': 'off',
    'no-throw-literal': 'error',
    'no-restricted-globals': 'off',
    'spaced-comment': 'off',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-extend-native': 'error',
    'no-shadow': [
      'error',
      {
        builtinGlobals: true,
        allow: ['name', 'html', 'test', 'close', 'open', 'status'],
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    // disallow certain object properties
    // https://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      },
    ],
    // disallow modifying variables that are declared using const
    'no-const-assign': 'error',
    // disallow duplicate class members
    // https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',
    // disallow importing from the same path more than once
    // https://eslint.org/docs/rules/no-duplicate-imports
    // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'no-duplicate-imports': 'off',
    // require use of the second argument for parseInt()
    radix: 'error',
    // require `await` in `async function` (note: this is a horrible rule that should never be used)
    // https://eslint.org/docs/rules/require-await
    'require-await': 'off',
    // disallow unnecessary string escaping
    // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',
    // require let or const instead of var
    'no-var': 'error',

    // require method and property shorthand syntax for object literals
    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],

    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    // Prefer destructuring from arrays and objects
    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    // use rest parameters instead of arguments
    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'error',
    // suggest using the spread operator instead of .apply()
    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'error',
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
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
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
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-param-name': 'error',
    'jsdoc/require-param-type': 'error',
    'jsdoc/require-returns-description': 'off',
    'jsdoc/require-returns-type': 'error',
    'jsdoc/require-returns-check': 'warn',
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
    // 'unicorn/prefer-node-remove': 'error',
    // 'unicorn/prefer-text-content': 'error',
    'unicorn/custom-error-definition': 'error',
    'unicorn/error-message': 'error',
    'unicorn/prefer-exponentiation-operator': 'error',
    'unicorn/catch-error-name': [
      'error',
      {
        name: 'err',
      },
    ],
    // others
    'node/no-unpublished-require': 'warn',

    'import/no-extraneous-dependencies': 'warn',
    'import/no-cycle': 'error',
    'import/named': 'error',
    'import/default': 'error',
    'import/no-default-export': 'warn',
    'import/no-duplicates': 'error',

    'dependencies/no-cycles': 'error',
    'dependencies/case-sensitive': 'error',
    'dependencies/no-unresolved': 'error',
    'dependencies/require-json-ext': 'off',
    // eslint comments
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/disable-enable-pair': 'off',
    // eslint-plugin-github - https://github.com/github/eslint-plugin-github/tree/master/docs/rules
    'github/array-foreach': 'warn',
    'github/async-currenttarget': 'error',
    'github/async-preventdefault': 'error',
    'github/get-attribute': 'error',
    'github/js-class-name': 'warn',
    'github/no-blur': 'error',
    'github/no-then': 'warn',
    'github/unescaped-html-literal': 'error',
    'github/no-edge-destructure-bug': 'error',
  },
  settings: {
    jsdoc: {
      additionalTagNames: {
        customTags: ['template', 'constructor', 'extends'],
      },
      allowOverrideWithoutParam: true,
      allowImplementsWithoutParam: true,
      allowAugmentsExtendsWithoutParam: true,
    },
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
