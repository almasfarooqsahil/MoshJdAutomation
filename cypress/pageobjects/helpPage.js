class helpPage{

    elements = { 

        // Login Locators
        UserEmail : () => cy.get('#email'),
        UserPassword : () => cy.get('#password'),
        Sendbutton : () => cy.xpath('//button[contains(@class, "btn-primary") and contains(@class, "btn-block")]'),
            
            
        HelpMenu : () => cy.xpath('//span[contains(text(),"Help")]'),
        fullName : () => cy.get('#full-name'),      
        emailAddress : () => cy.get('#email-address'), 
        subject : () => cy.get('#subject').select('support'),
        userMessage : () => cy.get('#user-message'),     
        SendBtn : () => cy.xpath('//button[contains(text(),"Send")]')
        

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

    ClickHelpMenu()
    {
        this.elements.HelpMenu().click();
    }
 
    enterFullName(fullName)
    {
        this.elements.fullName().clear();
        this.elements.fullName().type(fullName);
    }
 
    enterEmailAddress(emailAddress)
    {
        this.elements.emailAddress().clear();
        this.elements.emailAddress().type(emailAddress);
    }

    SelectSubject()
    {
        this.elements.subject();
    }

    enterUserMessage(userMessage)
    {
        this.elements.userMessage().clear();
        this.elements.userMessage().type(userMessage);
    }
   
    clickSendBtn() {
        this.elements.SendBtn().click();
    }
 
 }
 
 export default helpPage;