class BulkExportJobsPage{

    elements = { 

    // Login Locators
    UserEmail : () => cy.get('#email'),
    UserPassword : () => cy.get('#password'),
    Sendbutton : () => cy.xpath('//button[contains(@class, "btn-primary") and contains(@class, "btn-block")]'),

    // CLICK ON SIDE MENU
    JDManagementMenu : () => cy.xpath('//span[contains(text(),"JD Management")]').should('be.visible'),
    BulkExportJobsMenu : () => cy.xpath('//span[contains(text(),"Bulk Export Jobs")]').should('be.visible'),

    // SET BULK EXPORT SECHEDULE
    FileType : () => cy.get('select.form-control').first().select('csv'),
    Frequency : () => cy.get('select.form-control').eq(1).select('onetime'),
    BulkExportJbButton : () => cy.get('button.btn.btn-primary').should('be.visible'),

 
        
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
    ClickBulkExportJobsMenu()
    {
        this.elements.BulkExportJobsMenu().click()
    }


    // SECHEDULE EXPORT
    SelectFileType()
    {
        this.elements.FileType()
    }

    SelectFrequency()
    {
        this.elements.Frequency()
    }

    ClickBulkExportJbButton()
    {
        this.elements.BulkExportJbButton().click()
    }
 
 }
 
 export default BulkExportJobsPage;