var navigationCommands = {
    //testing if the category bar menu are navigating to the corresponding links
    navigating: function (browser, data) {
        this
            .api.useXpath()
            .click(`(//li[@class="top-nav-item pb-xs-2 mr-xs-2 display-flex-xs align-items-center"])[${data.number}]`)
            .verify.containsText('//div[@class="pt-xs-4 clearfix pl-xs-1 pl-md-4 pl-lg-6 pr-xs-1 pr-md-4 pr-lg-6"]', data.category)
        return this
    },

}
var registerCommand = {
    // testing if users can sign up using invalid email
    register: function () {
        this
            // testing for invalid email address and error essage
            .click('@signIn')
            .click('@register')
            .setValue('@emailField', 'fjlsjgmail.com')
            .setValue('@firstNameField', 'fsjlkj')
            .setValue('@passwordField', 'fsjlj525')
            .click('@registerButton')
            .verify.containsText('@emailError', 'Please enter a valid email address.')
        return this
    }
}

var searchCommand = {
    // testing for the search bar function and printing the amount of results
    search: function (browser) {
        this
            .click('@searchBar')
            .setValue('@searchBar', ['rare house plants', browser.Keys.ENTER])
            .getText('@numberResult', function (results) {
                console.log(results.value)
            })
        return this

    }
}
var helpCommand = {
    //testing the help center and its search function
    help: function (browser) {
        this
            .api.useXpath()
            .click('//*[text()="Help Center"]')
            .setValue(('(//*[@class="wt-input-btn-group__input search-input"])[2]'),
                ['how to open', browser.Keys.ENTER])
            .click('//*[text()="How to Open an Etsy Shop"]')
            .verify.containsText('//h1[@class="wt-text-title-03 wt-mt-xs-0 wt-mb-xs-3"]', 'How to Open an Etsy Shop')
        return this
    }
}
var commentCommand = {
    // testing the comment section in Etsy's career page
    comment: function () {
        this
            .useXpath()
            .maximizeWindow()
            .click('//*[text()="Careers"]')
            .click('//*[@class="careers-department__link"]')
            .click('//*[text()="Mutation Testing: A Tale of Two Suites"]')
            .useCss()
            .setValue('@authorField', 'qa project')
            .setValue('@email2Field', 'studentyal@gmail.com')
            .setValue('@response', 'doing this for class project')
            .click('@submitBtn')
        return this
    }
}
var signInCommand = {
    // testing the sign in function using a pre-registered account
    signIn: function () {
        this
            .click('@signIn')
            .setValue('@emailField', 'yuling.li7@gmail.com')
            .setValue('@passwordField', 'qaproject')
            .click('@signInButton')
            .click('@accountButton')
            .click('@profile')
            .verify.containsText('@profileName', 'ainsley')
        return this
    }
}

module.exports = {
    url: 'https://www.etsy.com/',
    commands: [navigationCommands, registerCommand, searchCommand, helpCommand, commentCommand, signInCommand],
    elements: {
        searchBar: '#global-enhancements-search-query',
        numberResult: 'span[class="wt-display-inline-flex-lg"]',

        // selectors for sign in test
        signIn: 'button[class="wt-btn wt-btn--small wt-btn--transparent wt-mr-xs-1 inline-overlay-trigger signin-header-action select-signin"]',
        emailField: '#join_neu_email_field',
        passwordField: '#join_neu_password_field',
        signInButton: 'button[class="wt-btn wt-btn--primary width-full"]',
        profileName: 'div[class="wt-grid wt-align-items-center wt-max-width-full"]',
        accountButton: 'li[class="user-nav has-sub-nav"]',
        profile: '#profile-link-label',

        //selectors for invalid email register test
        register: 'button[class="wt-btn wt-btn--secondary wt-btn--small inline-overlay-trigger register-header-action select-register"]',
        firstNameField: 'input[id="join_neu_first_name_field"]',
        emailError: '#aria-join_neu_email_field-error',
        registerButton: 'button[class="wt-btn wt-btn--primary width-full"]',

        //selectors for comment section test
        authorField: '#author',
        email2Field: '#email',
        response: 'textarea[name="comment"]',
        submitBtn: '#submit',









    }
}