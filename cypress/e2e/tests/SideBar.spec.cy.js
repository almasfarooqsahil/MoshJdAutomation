import sideBarPage from '../../pageobjects/sideBarPage'

const sideBarPageObj = new sideBarPage();

describe('Side Bar Links Test Suite', () => {

  beforeEach(function() {

    //Clear Cache and Cookies
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.reload()
    cy.visit('https://app-qa.moshjd.com/user/login');
    cy.wait(3000);
    sideBarPageObj.EnterUserEmail('noman.akram+15@hashehouse.com')
    sideBarPageObj.EnterUserPassword('N0tF0rEv$ry0ne!@')
    sideBarPageObj.ClickSubmitButton()
    cy.viewport(1540, 1000);
    cy.wait(3000);

})

 it('Dashboard Link Click Test Case', () => {


   sideBarPageObj.ClickDashboardLink()
   
 })

 it('JD Management Link Test Case', () => {


  sideBarPageObj.clickJDManagementLink()  
  
})

it('My JD Catalog Link Test Case', () => {


  sideBarPageObj.clickJDManagementLink()
  cy.wait(3000) 
  sideBarPageObj.ClickMyJDCatalogLink()
  
})

it('Compare JD Link Test Case', () => {


  sideBarPageObj.clickJDManagementLink()
  cy.wait(3000)
  sideBarPageObj.ClickCompareJDLink()
  
})

it('My JD Template Link Test Case', () => {


  sideBarPageObj.clickJDManagementLink()
  cy.wait(3000)
  sideBarPageObj.ClickMyJDTemplateLink()

})

it('Bulk Export Jobs Link Test Case', () => {

  sideBarPageObj.clickJDManagementLink()
  cy.wait(3000)
  sideBarPageObj.ClickBulkExportJobsLink()
 
})

it('Roles Permissions Link Link Test Case', () => {

  sideBarPageObj.ClickRolesPermissionsLink()

})

it('User Management Link Test Case', () => {

  sideBarPageObj.ClickUserManagementLink()


  
})

it('Version History Reporting Link Test Case', () => {


  sideBarPageObj.ClickVersionHistoryReportingLink()

  
})

it('Help Link Test Case', () => {


  sideBarPageObj.ClickHelpLink()
  
  
})


})