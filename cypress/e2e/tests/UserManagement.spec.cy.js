import UserManagementPage from '../../pageobjects/UserManagementPage'

const UserManagementPageObj = new UserManagementPage();

describe('User Management Test Suite', () => {

  beforeEach(function() {

    //Clear Cache and Cookies
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.reload()
    cy.visit('https://app-qa.moshjd.com/user/login');
    cy.wait(3000);
    UserManagementPageObj.EnterUserEmailID('abc@test.com.com')
    UserManagementPageObj.EnterUserPassword('12345')
    UserManagementPageObj.ClickSubmitButton()
    cy.viewport(1540, 1000);
    cy.wait(3000);

})

 it('Add User Test Case', () => {

   UserManagementPageObj.ClickUserManagementLink()
   cy.wait(2000);
   UserManagementPageObj.ClickAddBtn()
   cy.wait(2000);
   UserManagementPageObj.EnterName('Noman QA Akram Success')
   UserManagementPageObj.EnterEmail('noman.akram+33@hashehouse.com')
   cy.wait(2000);
   cy.get('#user_role').select(3).invoke("val").should('eq', '76')
   UserManagementPageObj.ClickAddUserModalBtn()
   cy.wait(4000);
   
 })

 it('Edit User Test Case', () => {

    cy.wait(4000);
    UserManagementPageObj.ClickUserManagementLink()
    cy.wait(2000);
    UserManagementPageObj.ClickEditUser()
    cy.wait(2000)
    UserManagementPageObj.ClickEditUserBtn()
    cy.wait(2000);
    UserManagementPageObj.Entereditusername('Noman QA Akram Success Edit')
    UserManagementPageObj.Enteredituseremail('noman.akram+33@hashehouse.com')
    cy.wait(2000);
    cy.get('#edit_user_role').select(2).invoke("val").should('eq', '76');
    UserManagementPageObj.ClickUpdateUserBtn()
    cy.wait(4000);
  })

  it('Delete User Test Case', () => {
    
    cy.wait(4000);
    UserManagementPageObj.ClickUserManagementLink()
    cy.wait(3000);
    UserManagementPageObj.ClickEditUser()
    cy.wait(3000);
    UserManagementPageObj.ClickDeleteUserbtn()
    cy.wait(3000);
    UserManagementPageObj.ClickDeleteYes()
  })


})