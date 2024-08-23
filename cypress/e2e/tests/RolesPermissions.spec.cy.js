import RolesPermissions from '../../pageobjects/RolesPermissionsPage'

const RolesPermissionsObj = new RolesPermissions();

describe('Roles and Permissions Test Suite', () => {

  beforeEach(function() {

    //Clear Cache and Cookies
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.reload()
    cy.visit('https://app-qa.moshjd.com/user/login');
    cy.wait(3000);
    RolesPermissionsObj.EnterUserEmail('abc@test.com.com')
    RolesPermissionsObj.EnterUserPassword('12345')
    RolesPermissionsObj.ClickSubmitButton()
    cy.viewport(1540, 1000);
    cy.wait(3000);

})

 it('Roles and Permissions Sidebar Link Click Test Case', () => {

   RolesPermissionsObj.RolePermissionsMenuClick()
   
 })

 it.skip('Add New Roles and Permissions Test Case', () => {

  RolesPermissionsObj.RolePermissionsMenuClick()
  RolesPermissionsObj.AddNewRolesBtnClick()
  RolesPermissionsObj.EnterUserRoleInput("noman12345mnnm")
  RolesPermissionsObj.addbtnClick()
  
  RolesPermissionsObj.SelectAllSections()
  cy.scrollTo('bottom')
  RolesPermissionsObj.clickAssignbtn()
  
})

it.skip('Change Role Name Test Case', () => {

  RolesPermissionsObj.RolePermissionsMenuClick()
  cy.wait(6000)
  RolesPermissionsObj.ClickChangeRoleNamebtn()
  RolesPermissionsObj.ClickChangeRoleNameOption()
  RolesPermissionsObj.ClickUpdateBtn()
})

it('Delete Role Test Case', () => {

  RolesPermissionsObj.RolePermissionsMenuClick()
  cy.wait(6000)
  RolesPermissionsObj.ClickChangeRoleNamebtn()
  RolesPermissionsObj.ClickDeleteBtn()
  cy.get('#alternate_user_role').select('noman1234')
  RolesPermissionsObj.ClickDeleteSelectedRoleBtn()
})

it('Edit Permissions Test Case', () => {

  RolesPermissionsObj.RolePermissionsMenuClick()
  RolesPermissionsObj.ClickEditBtn()
  RolesPermissionsObj.SelectAllSections()
  cy.scrollTo('bottom')
  RolesPermissionsObj.clickAssignbtn()
})


})