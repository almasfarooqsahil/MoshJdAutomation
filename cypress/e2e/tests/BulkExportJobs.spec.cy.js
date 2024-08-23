import BulkExportJobsPage from '../../pageobjects/BulkExportJobsPage'

const BulkExportJobsPageObj = new BulkExportJobsPage();

describe('Bulk Export Jobs Test Suite', () => {

    beforeEach(function() {

        //Clear Cache and Cookies
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload()
        cy.visit('https://app-qa.moshjd.com/user/login');
        cy.wait(3000);
        BulkExportJobsPageObj.EnterUserEmail('abc@test.com.com')
        BulkExportJobsPageObj.EnterUserPassword('12345')
        BulkExportJobsPageObj.ClickSubmitButton()
        cy.viewport(1540, 1000);
        cy.wait(3000);
    
    })

//CLICK ON ON SIDE MENU
it('Bulk Export Jobs Link Test Case', () => {
    BulkExportJobsPageObj.ClickJDManagementMenu()
    cy.wait(5000);
    BulkExportJobsPageObj.ClickBulkExportJobsMenu()
    BulkExportJobsPageObj.SelectFileType()
    BulkExportJobsPageObj.SelectFrequency()
    BulkExportJobsPageObj.ClickBulkExportJbButton()
 })








})