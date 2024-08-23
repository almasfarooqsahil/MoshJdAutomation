class VersionHistoryReportingPage{

    elements = { 

        // Login Locators
        UserEmail : () => cy.get('#email'),
        UserPassword : () => cy.get('#password'),
        Sendbutton : () => cy.xpath('//button[contains(@class, "btn-primary") and contains(@class, "btn-block")]'),    

        VersionHistoryReportingLink : () => cy.xpath('//span[contains(text(),"Version History Reporting")]'),
        ExportDropdown : () => cy.xpath('//a[@class="dropdown-toggle btn btn-white btn-dim btn-outline-light"]'),
        pdfExport : () => cy.xpath('//div[@class="nk-wrap"]//li[2]//a[1]//span[1]'),
        accordianicon : () => cy.xpath('//span[@class="accordion-icon"]'),
        jobName : () => cy.get('#search_job_name'),
        FilterBtn : () => cy.xpath('//button[normalize-space()="Filter"]')
  
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
    
    ClickVersionHistoryReportingLink()
    {
        this.elements.VersionHistoryReportingLink().click()
    }
    ClickExportDropdown()
    {
        this.elements.ExportDropdown().click()
    }
    ClickpdfExport()
    {
        this.elements.pdfExport().click()
    }
    Clickaccordianicon()
    {
        this.elements.accordianicon().click()
    }
    EnterjobName(jobname)
    {
        this.elements.jobName().type(jobname)
    }
    ClickFilterBtn()
    {
        this.elements.FilterBtn().click()
    }

 }
 
 export default VersionHistoryReportingPage;