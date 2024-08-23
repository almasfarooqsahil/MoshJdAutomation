import dashboardPage from '../../pageobjects/dashboardPage'

const dashboardObj = new dashboardPage();
describe('Dashboard Test Suite', () => {

 beforeEach(function() {

    //Clear Cache and Cookies
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.reload()
    cy.visit('https://app-qa.moshjd.com/user/login');
    cy.wait(3000);
    dashboardObj.EnterUserEmail('abc@test.com.com')
    dashboardObj.EnterUserPassword('12345')
    dashboardObj.ClickSubmitButton()
    cy.viewport(1540, 1000);
    cy.wait(3000);

})

 it('Dashboard Menu Click Test Case', () => {

   cy.wait(3000);
    dashboardObj.ClickDashboardMenu()
    //ASSERTION
    cy.xpath('//h4[contains(text(),"JD Summary")]').should('include.text', 'JD Summary');
  
 })

 it('View All JD Test Case', () => {

   cy.wait(3000);
   dashboardObj.ClickDashboardMenu()
   dashboardObj.ClickViewAllJD()
   //ASSERTION
   cy.xpath('//h3[contains(text(),"My JD Catalog")]').should('include.text', 'My JD Catalog');
 
})

it('JD Advanced Search Test Case', () => {
   
   cy.wait(3000);
   dashboardObj.ClickDashboardMenu()
   dashboardObj.Clickaccordianicon()
   dashboardObj.EnterjobTitle('QA Job')
   dashboardObj.ClickFilterBtn()

   
 })

 it('Add New Job Test Case', () => {

   dashboardObj.ClickDashboardMenu();
   cy.wait(6000);
   dashboardObj.ClickAddNewJobBtn();
   dashboardObj.EnterJobTitle('SQA Engineer');
   dashboardObj.EnterJobCode('1234');
   dashboardObj.EnterIndustry('Automation');
   dashboardObj.EnterLocation('USA');
   dashboardObj.ClickAssignBtn();
   cy.wait(6000);
   //ASSERTION
   cy.xpath('//label[contains(text(),"Job Code")]').should('include.text', 'Job Code');
  
})

it('View JD Test Case', () => {
   
   cy.wait(3000);
   dashboardObj.ClickDashboardMenu()
   dashboardObj.ClickViewJD()
   //ASSERTION
   cy.xpath('//label[contains(text(),"Job Code")]').should('include.text', 'Job Code');
   
 });

})