'use strict';

const { RuleTester } = require('eslint');

const rule = require('./unescaped-html-literal');

const ruleTester = new RuleTester();

ruleTester.run('unescaped-html-literal', rule, {
  valid: [
    {
      code: 'var foo = html`<span>test span</span>`',
      parserOptions: { ecmaVersion: 2017 },
    },
    {
      code: 'const foo = "<svg></svg>"',
      parserOptions: { ecmaVersion: 2017 },
    },
    {
      code: 'const foo = "<XMLSChema><someXml></someXml></XMLSChema>"',
      parserOptions: { ecmaVersion: 2017 },
    },
  ],

  invalid: [
    {
      code: 'var invalidVariable = "<span>long span text</span>"',
      errors: [{ message: /^Unescaped.+HTML.+literal/ }],
    },
    {
      code:
        'var invalidVariable = foo`<b>long bold text in template literal that is not html</b>`',
      errors: [{ message: /^Unescaped.+HTML.+literal/ }],
      parserOptions: { ecmaVersion: 2017 },
    },
  ],
});
