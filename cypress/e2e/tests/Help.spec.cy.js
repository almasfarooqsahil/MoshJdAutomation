import helpPage from '../../pageobjects/helpPage'
const helpObj = new helpPage();

describe('Help Test Suite', () => {

   beforeEach(function() {

      //Clear Cache and Cookies
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.reload()
      cy.visit('https://app-qa.moshjd.com/user/login');
      cy.wait(3000);
      helpObj.EnterUserEmail('abc@test.com.com')
      helpObj.EnterUserPassword('12345')
      helpObj.ClickSubmitButton()
      cy.viewport(1540, 1000);
      cy.wait(3000);
  
  })

 it('Help Form Submission', () => {

    helpObj.ClickHelpMenu()
    cy.wait(5000)
    cy.url().should('eq', 'https://app-qa.moshjd.com/user/feedback')
    helpObj.enterFullName('SQA Engineer')
    helpObj.enterEmailAddress('noman.akram@hashehouse.com')
    helpObj.SelectSubject()
    helpObj.enterUserMessage('This is Test Message for Automated Script')
    helpObj.clickSendBtn()
   
 })

})