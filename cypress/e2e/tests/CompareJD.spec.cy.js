import CompareJDPage from '../../pageobjects/CompareJDPage'

const CompareJDPageObj = new CompareJDPage();

describe('Compare JDs Test Suite', () => {

    beforeEach(function() {

        //Clear Cache and Cookies
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://app-qa.moshjd.com/user/login');
        cy.wait(3000);
        CompareJDPageObj.EnterUserEmail('abc@test.com.com')
        CompareJDPageObj.EnterUserPassword('12345')
        CompareJDPageObj.ClickSubmitButton()
        cy.viewport(1540, 1000);
        cy.wait(3000);
    
    })

//CLICK ON ON SIDE MENU
it('Compare JD Link Test Case', () => {

    CompareJDPageObj.ClickJDManagementMenu();
    CompareJDPageObj.ClickCompareJDMenu();
 })

 //COMPARE JD TEST CASE
 it('Compare JD Test Case', () => {

    CompareJDPageObj.ClickJDManagementMenu()
    CompareJDPageObj.ClickCompareJDMenu()
    CompareJDPageObj.ClickFirstJob()
    //CompareJDPageObj.ClickSelectJob()
 })






})