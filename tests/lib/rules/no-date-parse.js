const rule = require('../../../lib/rules/no-date-parse')
const RuleTester = require('eslint').RuleTester

const ruleTester = new RuleTester()

ruleTester.run('no-date-parse', rule, {
  valid: [{code: 'new Date()'}],
  invalid: [
    {
      code: 'new Date("2019-09-07T09:00:00")',
      errors: [
        {
          message: 'Parsing of date strings with the Date constructor (and Date.parse, they are equivalent) is strongly discouraged due to browser differences and inconsistencies.'
        }
      ]
    }
  ]
});
