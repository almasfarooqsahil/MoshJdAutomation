import MyJDCatalogPage from '../../pageobjects/MyJDCatalogPage'

const MyJDCatalogObj = new MyJDCatalogPage();

describe('My JD Catalog Test Suite', () => {

    beforeEach(function() {

        //Clear Cache and Cookies
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload()
        cy.visit('https://app-qa.moshjd.com/user/login');
        cy.wait(3000);
        MyJDCatalogObj.EnterUserEmail('abc@test.com.com')
        MyJDCatalogObj.EnterUserPassword('12345')
        MyJDCatalogObj.ClickSubmitButton()
        cy.viewport(1540, 1000);
        cy.wait(3000);
    
    })

it('My JD Catalog Link Test Case', () => {


    MyJDCatalogObj.ClickJDManagementMenu();
    MyJDCatalogObj.ClickMyJDCatalogMenu();
   
 })

 it('Add New Job Test Case', () => {


    MyJDCatalogObj.ClickJDManagementMenu();
    MyJDCatalogObj.ClickMyJDCatalogMenu();
    cy.wait(6000);
    MyJDCatalogObj.ClickAddNewJobBtn();
    MyJDCatalogObj.EnterJobTitle('SQA Engineer');
    MyJDCatalogObj.EnterJobCode('1234');
    MyJDCatalogObj.EnterIndustry('Automation');
    MyJDCatalogObj.EnterLocation('USA');
    MyJDCatalogObj.ClickAssignBtn();
    cy.wait(6000);
   
 })

 it('Export in PDF Test Case', () => {


    MyJDCatalogObj.ClickJDManagementMenu();
    MyJDCatalogObj.ClickMyJDCatalogMenu();
    cy.wait(6000);
    MyJDCatalogObj.ClickExportJDPDF();
    MyJDCatalogObj.ClickdropdownIcon();
    MyJDCatalogObj.ClickPdfOption();
   
 })

 it('Export in Excel Test Case', () => {


    MyJDCatalogObj.ClickJDManagementMenu();
    MyJDCatalogObj.ClickMyJDCatalogMenu();
    cy.wait(6000);
    MyJDCatalogObj.ClickExportJDPDF();
    MyJDCatalogObj.ClickdropdownIcon();
    MyJDCatalogObj.ClickExcelOption();
   
 })

 it('Export in Word Test Case', () => {


    MyJDCatalogObj.ClickJDManagementMenu();
    MyJDCatalogObj.ClickMyJDCatalogMenu();
    cy.wait(6000);
    MyJDCatalogObj.ClickExportJDPDF();
    MyJDCatalogObj.ClickdropdownIcon();
    MyJDCatalogObj.ClickWordOption;
   
 })


})