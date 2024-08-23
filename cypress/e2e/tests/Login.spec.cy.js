import loginPage from '../../pageobjects/loginPage'

describe('Login Test Suite', () => {

 beforeEach(function() {
   //Clear Cache and Cookies
   cy.clearCookies();
   cy.clearLocalStorage();
   cy.reload()
   cy.visit('https://app-qa.moshjd.com/user/login');
   cy.wait(5000);
})

 it('Correct Username and Correct Password Test Case', () => {
   const loginObj = new loginPage();
   loginObj.enterUsername('abc@test.com.com')
   loginObj.enterPassword('12345')
   loginObj.clickSubmit();
   
 })

 it('Incorrect Username and Incorrect Password Test Case', () => {
   const loginObj = new loginPage();
   loginObj.enterUsername('selenium')
   loginObj.enterPassword('qa@123')
   loginObj.clickSubmit();
 })

 it('Incorrect Username and Correct Password Test Case', () => {
  const loginObj = new loginPage();
  loginObj.enterUsername('noman.akram+15sadasdd@hashehouse.com')
  loginObj.enterPassword('N0tF0rEv$ry0ne!@')
  loginObj.clickSubmit();
  
})

it('Correct Username and Incorrect Password Test Case', () => {
  const loginObj = new loginPage();
  loginObj.enterUsername('noman.akram+15@hashehouse.com')
  loginObj.enterPassword('N0tF0rEv$ry0ne!@asdadasddas')
  loginObj.clickSubmit();
  
})

it('Empty Username and Empty Password Test Case', () => {
  const loginObj = new loginPage();
  loginObj.enterUsername(' ')
  loginObj.enterPassword(' ')
  loginObj.clickSubmit();
  
})

})