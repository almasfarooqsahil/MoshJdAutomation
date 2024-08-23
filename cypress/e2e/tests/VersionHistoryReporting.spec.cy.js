import VersionHistoryReportingPage from '../../pageobjects/VersionHistoryReportingPage'

const VersionHistoryReportingObj = new VersionHistoryReportingPage();

describe('Version History Reporting Test Suite', () => {

    beforeEach(function() {

        //Clear Cache and Cookies
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload()
        cy.visit('https://app-qa.moshjd.com/user/login');
        cy.wait(3000);
        VersionHistoryReportingObj.EnterUserEmail('abc@test.com.com')
        VersionHistoryReportingObj.EnterUserPassword('12345')
        VersionHistoryReportingObj.ClickSubmitButton()
        cy.viewport(1540, 1000);
        cy.wait(3000);
    
 })

 it('Version History Reporting Link Test Case', () => {


   VersionHistoryReportingObj.ClickVersionHistoryReportingLink()
   
 })

 it('Export PDF Test Case', () => {
   
    VersionHistoryReportingObj.ClickVersionHistoryReportingLink()
    VersionHistoryReportingObj.ClickExportDropdown()
    VersionHistoryReportingObj.ClickpdfExport()


    
  });

  it('Advanced Search', () => {
   
    VersionHistoryReportingObj.ClickVersionHistoryReportingLink()
    VersionHistoryReportingObj.Clickaccordianicon()
    VersionHistoryReportingObj.EnterjobName('QA Job')
    VersionHistoryReportingObj.ClickFilterBtn()

    
  });


})