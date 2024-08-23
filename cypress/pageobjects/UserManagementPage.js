class UserManagementPage{

    elements = { 

        // Login Locators
        UserEmailId : () => cy.get('#email'),
        UserPassword : () => cy.get('#password'),
        Sendbutton : () => cy.xpath('//button[contains(@class, "btn-primary") and contains(@class, "btn-block")]'),       

        UserManagementLink : () => cy.xpath('//span[contains(text(),"User Management")]'),
        AddBtn : () => cy.xpath('//a[@class="btn btn-white btn-outline-light"]//span[contains(text(),"Add")]'),
        name : () => cy.xpath('(//input[@type="text" and @id="user_name" and @name="user_name" and @class="form-control input" and @aria-required="true" and @aria-invalid="false"])[1]'),
        Email : () => cy.xpath('(//input[@type="email" and @id="user_email" and @name="user_email" and @class="form-control input" and @aria-required="true" and @aria-invalid="false"])[1]'),
        //userrole : () =>  cy.get('#user_role').select('noman12'), // Select the 'user-1' option,

        AddUserBtn : () => cy.get('a[class="btn btn-white btn-outline-light"] span'),

        AddUserModalBtn : () => cy.xpath('(//button[@type="submit"])[1]'),
        
        // EDIT USER
        EditUser : () => cy.xpath('(//em[@class="icon ni ni-more-h"])[1]').should('be.visible'),
    
        EditUserBtn : () => cy.xpath('(//em[@class="icon ni ni-edit"])[1]').should('be.visible'),
       

        editusername : () => cy.get('#edit_user_name'),
        
        edituseremail : () => cy.get('#edit_user_email'),

        UpdateUserBtn : () => cy.xpath('//button[contains(text(),"Update User")]'),

        DeleteUserbtn : () => cy.xpath('//div[@class="dropdown-menu dropdown-menu-end show"]//ul[@class="link-list-opt no-bdr"]//li//a[@href="javscript:;"]//span[contains(text(),"Delete")]'),
        DeleteYes : () => cy.xpath('//button[@type="submit" and contains(@class, "btn-danger")]').should('be.visible')

    }
    

    EnterUserEmailID(UserEmailValue)
    {
        this.elements.UserEmailId().type(UserEmailValue)
    }

    EnterUserPassword(UserPasswordValue)
    {
        this.elements.UserPassword().type(UserPasswordValue)
    }

    ClickSubmitButton()
    {
        this.elements.Sendbutton().click()
    }

    ClickUserManagementLink()
    {
        this.elements.UserManagementLink().click()
    }
    ClickAddBtn()
    {
        this.elements.AddBtn().click()
    }
    EnterName(name)
    {
        this.elements.name().clear()
        this.elements.name().type(name)
    }
    EnterEmail(Email)
    {
        this.elements.Email().clear()
        this.elements.Email().type(Email)
    }
    ClickAddUserModalBtn()
    {
        this.elements.AddUserModalBtn().click({ force: true})
    }
    ClickAddUserBtn()
    {
        this.elements.AddUserBtn().click()
    }

    ClickEditUser()
    {
        this.elements.EditUser().click()
    }
    ClickEditUserBtn()
    {
        this.elements.EditUserBtn().click()
    }
    Entereditusername(editusername)
    {
        this.elements.editusername().clear()
        this.elements.editusername().type(editusername)
    }
    Enteredituseremail(edituseremail)
    {
        this.elements.edituseremail().clear()
        this.elements.edituseremail().type(edituseremail)
    }
    ClickUpdateUserBtn()
    {
        this.elements.UpdateUserBtn().click({ force: true })
    }
    ClickDeleteUserbtn()
    {
        this.elements.DeleteUserbtn().click()
    }
    ClickDeleteYes()
    {
        this.elements.DeleteYes().click()
    }

 }
 
 export default UserManagementPage;