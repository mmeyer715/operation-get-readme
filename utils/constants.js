const Constants = {
   // Base Test Value
   EMPTY_ARRAY: [],

   // Badge Values
   BADGE_BASE: "![badge](https://img.shields.io/badge/license-",
   BADGE_END: '-blueviolet)',
   SINGLE_BADGE: [{ value: 'THIS'}],
   MULTIPLE_BADGE:[{ value: 'THIS'}, { value: 'THAT'}],

   // Section Test Values
   SINGLE_SECTION: [{ value: 'you best be working' }],
   MULTIPLE_SECTION: [{ value: 'you best be working' }, { value: 'or there is going to be trouble' }],

   // Questions values
   EMAIL_BASE: "[EMAIL](mailto:",
   EMAIL_END: ")",
   GITHUB_BASE: "[GITHUB](",
   GITHUB_END: ")",
   SINGLE_QUESTION: [ { name: 'Lucas', gitHub: 'ggg', email: 'ggg' } ],
   MULTIPLE_QUESTION: [ { name: 'Lucas', gitHub: 'ggg', email: 'ggg' }, { name: 'Maria', gitHub: 'hhhh', email: 'hhhh' } ]
}

module.exports = Constants;