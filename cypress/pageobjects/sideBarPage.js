class sideBarPage{

    elements = { 

        // Login Locators
        UserEmail : () => cy.get('#email'),
        UserPassword : () => cy.get('#password'),
        Sendbutton : () => cy.xpath('//button[contains(@class, "btn-primary") and contains(@class, "btn-block")]'),


        dashboardLink : () => cy.xpath('//body/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/ul[1]/li[1]/a[1]').should('be.visible'),
        JDManagementLink : () => cy.xpath('//span[contains(text(),"JD Management")]'),
        MyJDCatalogLink : () => cy.xpath('//span[contains(text(),"My JD Catalog")]'),      
        CompareJDLink : () => cy.xpath("//body/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/ul[1]/li[2]/ul[1]/li[2]"),
        MyJDTemplateLink : () => cy.xpath("//span[contains(text(),'My JD Templates')]"),
        BulkExportJobsLink : () => cy.xpath("//span[contains(text(),'Bulk Export Jobs')]"),

        RolesPermissionsLink : () => cy.xpath('//span[contains(text(),"Roles & Permission")]'),
        UserManagementLink : () => cy.xpath('//span[contains(text(),"User Management")]'),
        VersionHistoryReportingLink : () => cy.xpath('//span[contains(text(),"Version History Reporting")]'),
        HelpLink : () => cy.xpath('//span[contains(text(),"Help")]'),
    
       
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
    
    ClickDashboardLink()
    {
        this.elements.dashboardLink().click();
    }

    clickJDManagementLink()
    {
        this.elements.JDManagementLink().click();
    }

    ClickMyJDCatalogLink()
    {
        this.elements.MyJDCatalogLink().click()
    }
 
    ClickCompareJDLink()
    {
        this.elements.CompareJDLink().click()
    }

    ClickMyJDTemplateLink()
    {
        this.elements.MyJDTemplateLink().click()
    }

    ClickBulkExportJobsLink()
    {
        this.elements.BulkExportJobsLink().click()
    }

    ClickRolesPermissionsLink()
    {
        this.elements.RolesPermissionsLink().click()
    }

    ClickUserManagementLink()
    {
        this.elements.UserManagementLink().click()
    }

    ClickVersionHistoryReportingLink()
    {
        this.elements.VersionHistoryReportingLink().click()
    }

    ClickHelpLink()
    {
        this.elements.HelpLink().click()
    }

 }
 
 export default sideBarPage;