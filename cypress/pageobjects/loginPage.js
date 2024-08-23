class loginPage{

    elements = { 
        usernameInput : () => cy.get('#email'),      
        passwordInput : () => cy.get('#password'),    
        loginBtn : () => cy.xpath('//button[contains(@class, "btn-primary") and contains(@class, "btn-block")]')

    }
 
    enterUsername(username)
    {
        this.elements.usernameInput().clear();
        this.elements.usernameInput().type(username);
    }
 
    enterPassword(password)
    {
        this.elements.passwordInput().clear();
        this.elements.passwordInput().type(password);
    }
   
    clickSubmit() {
        this.elements.loginBtn().click();
    }
 
 }
 
 export default loginPage;