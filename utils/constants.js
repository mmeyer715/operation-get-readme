const Constants = {
   BADGE_BASE: "![badge](https://img.shields.io/badge/license-",
   BADGE_END: '-blueviolet)',
   EMPTY_ARRAY: [],
   SINGLE_BADGE: [{ licenseName: 'THIS', licenseLink: 'THIS.link' }],
   MULTIPLE_BADGE:[{ licenseName: 'THIS', licenseLink: 'THIS.link' }, { licenseName: 'THAT', licenseLink: 'THAT.link' }],
   SINGLE_SECTION: [{ value: 'you best be working' }],
   MULTIPLE_SECTION: [{ value: 'you best be working' }, { value: 'or there is going to be trouble' }]
}

module.exports = Constants;