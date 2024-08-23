// cypress_runner.js

const cypress = require('cypress');

async function runTests() {
  try {
    const { totalFailed } = await cypress.run({
      // Add any Cypress options or configuration here
      // For example:
      config: {
        video: false, // Disable video recording
      },
      spec: 'cypress/e2e/tests/*', // Path to your test specs
    });

    // Exit the process with the number of failed tests as the exit code
    process.exit(totalFailed);
  } catch (error) {
    console.error('Error during test run:', error.message);
    process.exit(1); // Exit with a non-zero code in case of an error
  }
}

runTests();
