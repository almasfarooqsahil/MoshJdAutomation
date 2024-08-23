class CompareJDPage{

    elements = { 

    // Login Locators
    UserEmail : () => cy.get('#email'),
    UserPassword : () => cy.get('#password'),
    Sendbutton : () => cy.xpath('//button[contains(@class, "btn-primary") and contains(@class, "btn-block")]'),

    // CLICK ON SIDE MENU
    JDManagementMenu : () => cy.xpath('//span[contains(text(),"JD Management")]').should('be.visible'),
    CompareJDMenu : () => cy.xpath('//a[@href="/user/jobs-compare"]').should('be.visible'),

    // SELECT JOBS
    FirstJob : () => cy.xpath('(//input[@aria-autocomplete="list"])[1]'),
    SelectJob : () => cy.xpath('//ul[@id="vs3__listbox" and @role="listbox" and @style="display: none; visibility: hidden;"]'),
 
        
    }


    //LOGIN USER
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

       // CLICK ON SIDE MENU AND COMPARE JD
    ClickJDManagementMenu()
    {
         this.elements.JDManagementMenu().click()
    }
    ClickCompareJDMenu()
    {
        this.elements.CompareJDMenu().click()
    }

    //COMPARE JOBS
    ClickFirstJob()
    {
        this.elements.FirstJob().click()
    }
    ClickSelectJob()
    {
        this.elements.SelectJob().click()
    }

 
 }
 
 export default CompareJDPage;