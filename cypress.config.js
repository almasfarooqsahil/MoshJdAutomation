const { defineConfig } = require('cypress');


module.exports = defineConfig({
  "defaultCommandTimeout": 11000,
  "pageLoadTimeout": 11000,
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  retries: 0,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },

  
});
