const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.forbes.com/',
    pageLoadTimeout: 400000
  },
})
