class RolesPermissions{

    elements = { 
              
        // Login Locators
        UserEmail : () => cy.get('#email'),
        UserPassword : () => cy.get('#password'),
        Sendbutton : () => cy.xpath('//button[contains(@class, "btn-primary") and contains(@class, "btn-block")]'),

      

        RolePermissionsMenu : () => cy.xpath('//span[contains(text(),"Roles & Permission")]'),
        AddNewRolesBtn : () => cy.xpath('//span[contains(text(),"Add New Role")]'),
        userRoleInput : () => cy.get("#user_role"),      
        addbtn : () => cy.xpath('//button[contains(text(),"Add")]'),
        SelectAllSections : () => cy.get('#select_all_sections'),
        Assignbtn : () => cy.xpath('//button[contains(text(),"Assign")]'),
        // Change Name of Role
        ChangeRoleNamebtn : () => cy.xpath('//body/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/em[1]', { timeout: 10000 }),
        ChangeRoleNameOption : () => cy.xpath('//div[@class="dropdown-menu dropdown-menu-end show"]//ul[@class="link-list-opt no-bdr"]//li//a[@href="javascript:;"]//span[contains(text(),"Change")]'),
        UserRoleName : () => cy.xpath('//input[@id="edit_user_role"]'),
        UpdateBtn : () => cy.xpath('//button[contains(text(),"Update")]'),
        // DELETE ROLE
        DeleteBtn : () => cy.xpath('//div[@class="dropdown-menu dropdown-menu-end show"]//ul[@class="link-list-opt no-bdr"]//li//a[@href="javascript:;"]//span[contains(text(),"Delete")]'),
        DeleteRoleBtn : () => cy.xpath('//div[@class="dropdown-menu dropdown-menu-end show"]//ul[@class="link-list-opt no-bdr"]//li//a[@href="javascript:;"]//span[contains(text(),"Delete")]'),
        DeleteSelectedRoleBtn : () => cy.xpath('//button[contains(text(),"Delete")]'),
        // EDIT PERMISSIONS
        EditBtn : () => cy.xpath('//div[@class="row g-gs"]//div[1]//div[1]//div[1]//div[1]//div[3]//a[1]//span[1]')

       
    }


    EnterUserEmail(UserEmailValue)
    {
        this.elements.UserEmail().type(UserEmailValue)
    }

    EnterUserPassword(UserPasswordValue)
    {
        this.elements.UserPassword().type(UserPasswordValue)
    }

    ClickSubmitButton()
    {
        this.elements.Sendbutton().click()
    }
    RolePermissionsMenuClick() 
    {
        this.elements.RolePermissionsMenu().click();
    }
 
    AddNewRolesBtnClick()
    {
        this.elements.AddNewRolesBtn().click();
    }

    EnterUserRoleInput(UserRole)
    {
        this.elements.userRoleInput().type(UserRole);
    }
 
    addbtnClick()
    {
        this.elements.addbtn().click();
    }
   
    SelectAllSections()
    {
        this.elements.SelectAllSections().click();
    }

    clickAssignbtn()
    {
        this.elements.Assignbtn().click();
    }

    ClickChangeRoleNamebtn()
    {
        this.elements.ChangeRoleNamebtn().click()
    }
    ClickChangeRoleNameOption()
    {
        this.elements.ChangeRoleNameOption().click()
    }

    ClickUpdateBtn()
    {
        this.elements.UpdateBtn().click()
    }

    ClickDeleteBtn()
    {
        this.elements.DeleteBtn().click()
    }

    ClickDeleteSelectedRoleBtn()
    {
        this.elements.DeleteSelectedRoleBtn().click()
    }

    ClickEditBtn()
    {
        this.elements.EditBtn().click()
    }
 
 }
 
 export default RolesPermissions;