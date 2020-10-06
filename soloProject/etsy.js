var homePage = {}
const { join } = require('path')
var useArray = require('../TestAsset/etsyArray')

module.exports = {
    beforeEach: browser => {
        homePage = browser.page.etsyOb()
        homePage
            .navigate()
    },
    after: brower => {
        homePage
            .end()

    },
    'navigation menu test': browser => {
        useArray.forEach(test => (
            homePage
                .navigating(homePage, test)
        ))
    },
    'register test': browser => {
        homePage
            .register(browser)

    },
    'search test': browser => {
        homePage
            .search(browser)
    },

    'help section test': browser => {
        homePage
            .help(browser)

    },
    'entering a comment test': browser => {
        homePage
            .comment(browser)

    },
    'sign in test': browser => {
        homePage
            .signIn(browser)

    }

}