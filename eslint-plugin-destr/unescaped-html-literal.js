'use strict';

/**
 * Inspired by https://github.com/github/eslint-plugin-github/blob/master/lib/rules/unescaped-html-literal.js
 */

const isHTML = require('is-html');

const message =
  'Unescaped HTML literal. Use html`` tag template literal for secure escaping.';

function isHtmlString(val) {
  if (typeof val !== 'string' || val.length < 12 || !/^\s*</.test(val))
    return false;
  return isHTML(val);
}

/**
 * @see {@link https://blog.webiny.com/create-custom-eslint-rules-in-2-minutes-e3d41cb6a9a0}
 */

module.exports = {
  meta: {
    docs: {
      description: 'recommend html strings to be tagged literals with html`',
      category: 'Stylistic Issues',
      recommended: true,
    },
    schema: [], // no options
  },
  create(context) {
    return {
      Literal(node) {
        if (!isHtmlString(node.value)) return;

        context.report({
          node,
          message,
        });
      },
      TemplateLiteral(node) {
        if (!isHtmlString(node.quasis[0].value.raw)) return;

        if (!node.parent.tag || node.parent.tag.name !== 'html') {
          context.report({
            node,
            message,
          });
        }
      },
    };
  },
};
