module.exports = {
  meta: {
    type: 'suggestion',

    docs: {
      description:
        'Parsing of date strings with the Date constructor (and Date.parse, they are equivalent) is strongly discouraged due to browser differences and inconsistencies.',
      category: 'Best Practices',
      recommended: false,
      // url: 'https://eslint.org/docs/rules/no-new-wrappers',
    },

    schema: [],

    messages: {
      noNewDate:
        'Parsing of date strings with the Date constructor (and Date.parse, they are equivalent) is strongly discouraged due to browser differences and inconsistencies.',
    },
  },

  create(context) {
    return {
      NewExpression(node) {
        console.log('node:', node);
        if (
          node.callee.name === 'Date' &&
          node.arguments.length === 1
        ) {
          context.report({
            node,
            messageId: 'noNewDate',
          });
        }
      },
    };
  },
};
