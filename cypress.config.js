const { defineConfig } = require("cypress")
const baseUrl = require("./cypress/support/cypressBaseUrl")

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {},
        baseUrl: baseUrl,
        browser: "chrome",
    },
})
