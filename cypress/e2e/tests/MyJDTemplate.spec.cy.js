import MyJDTemplatePage from '../../pageobjects/MyJDTemplatePage'

const MyJDTemplateObj = new MyJDTemplatePage();

describe('My JD Template Test Suite', () => {

    beforeEach(function() {

        //Clear Cache and Cookies
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload()
        cy.visit('https://app-qa.moshjd.com/user/login');
        cy.wait(3000);
        MyJDTemplateObj.EnterUserEmail('abc@test.com.com')
        MyJDTemplateObj.EnterUserPassword('12345')
        MyJDTemplateObj.ClickSubmitButton()
        cy.viewport(1540, 1000);
        cy.wait(3000);
    
    })

it('My JD Templates Link Test Case', () => {


    MyJDTemplateObj.ClickJDManagementMenu();
    MyJDTemplateObj.ClickMyJDTemplateMenu();
   
 })

it('Add New Template Test Case', () => {


    MyJDTemplateObj.ClickJDManagementMenu();
    MyJDTemplateObj.ClickMyJDTemplateMenu();
    cy.wait(3000);
    MyJDTemplateObj.ClickAddNewTemplateBtn();
    cy.wait(3000);
    MyJDTemplateObj.EnterTemplateName('SQA Engineer');

    const fileName = 'logo.png';
    cy.get('#template_logo').attachFile(fileName);
    
    cy.get("#selectfield_1").click()
    cy.get("#selectfield_2").click()
    cy.get("#selectfield_3").click()
    cy.get("#selectfield_4").click()
    
    MyJDTemplateObj.ClickAddTemplateButton()
   
 })

 it('View JD Template Test Case', () => {


    MyJDTemplateObj.ClickJDManagementMenu()
    MyJDTemplateObj.ClickMyJDTemplateMenu()
    cy.wait(3000);
    MyJDTemplateObj.ClickActionIcon()
    cy.wait(4000)
    MyJDTemplateObj.ClickViewButton()

   
 })

it('Edit JD Template Test Case', () => {


    MyJDTemplateObj.ClickJDManagementMenu()
    cy.wait(5000);
    MyJDTemplateObj.ClickMyJDTemplateMenu()
    cy.wait(3000);
    MyJDTemplateObj.ClickActionIcon()
    MyJDTemplateObj.ClickEditButton()
    cy.reload();
    MyJDTemplateObj.EnterTemplateName('SQA Engineer Edit');

    const fileName = 'logo.png';
    cy.get('#template_logo').attachFile(fileName);
    
    cy.get("#selectfield_3").click()
    cy.get("#selectfield_6").click()
    cy.get("#selectfield_7").click()

    MyJDTemplateObj.ClickUpdateButton()
 })
 
 // CREATE JOB
 it('Create Job Test Case', () => {


    MyJDTemplateObj.ClickJDManagementMenu()
    MyJDTemplateObj.ClickMyJDTemplateMenu()
    cy.wait(3000);
    MyJDTemplateObj.ClickActionIcon()
    MyJDTemplateObj.ClickCreateJobButton()
    cy.wait(3000);
    MyJDTemplateObj.EnterJobTitle('SQA Engineer');
    MyJDTemplateObj.EnterJobCode('1234');
    MyJDTemplateObj.EnterIndustry('Automation');
    MyJDTemplateObj.EnterLocation('USA');
    MyJDTemplateObj.ClickCreateButton();

 })




 it('Clone JD Template Test Case', () => {


    MyJDTemplateObj.ClickJDManagementMenu()
    MyJDTemplateObj.ClickMyJDTemplateMenu()
    cy.wait(3000);
    MyJDTemplateObj.ClickActionIcon()
    cy.wait(3000);
    MyJDTemplateObj.ClickCloneButton()
    MyJDTemplateObj.ClickCloneOK()

 }) 

 it('Delete JD Template Test Case', () => {


    MyJDTemplateObj.ClickJDManagementMenu()
    MyJDTemplateObj.ClickMyJDTemplateMenu()
    cy.wait(3000);
    MyJDTemplateObj.ClickActionIcon()
    cy.wait(3000);
    MyJDTemplateObj.ClickDeleteButton()
    MyJDTemplateObj.ClickDeleteOK()


 }) 


})