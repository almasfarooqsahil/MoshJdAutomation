class dashboardPage{

    elements = { 

        // Login Locators
        UserEmail : () => cy.get('#email'),
        UserPassword : () => cy.get('#password'),
        Sendbutton : () => cy.xpath('//button[contains(@class, "btn-primary") and contains(@class, "btn-block")]'),
           
           
        // DASHBOARD MENU
        DashboardMenu : () => cy.xpath('//span[contains(text(),"Dashboard")]').should('be.visible').click(),
        AddNewJobBtn : () => cy.xpath('//span[normalize-space()="Add New Job"]'),
        JobTitle : () => cy.get('#job_title'),
        JobCode : () => cy.get('#code'),
        industry : () => cy.get('#industry'),
        department : () => cy.get('#department'),
        location : () => cy.get('#location'),
        Assignbtn : () => cy.xpath('(//button[contains(text(),"Assign")])[1]'),
        ViewAllbtn : () => cy.xpath('//span[contains(text(),"View All")]'),
        ViewAllJD : () => cy.xpath('//span[contains(text(),"View All")]'),
        accordianicon : () => cy.xpath('//a[@data-bs-target="#advance_filters_content"]//h6[@class="title"][normalize-space()="Advanced Search"]'),
        jobTitle : () => cy.get('#job_title'),
        FilterBtn : () => cy.xpath('//div[@id="advance_filters_content"]//button[@type="button"][normalize-space()="Filter"]'),


        //View JD
        ViewJDBtn : () => cy.xpath('//div[@class="nk-block user-all-jobs"]//div[2]//div[8]//button[1]')
        

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
    ClickDashboardMenu()
    {
        this.elements.DashboardMenu().click();
    }
 
    ClickAddNewJobBtn()
    {
        this.elements.AddNewJobBtn().click();
    }

    EnterJobTitle(JobTitle)
    {
        this.elements.JobTitle().clear();
        this.elements.JobTitle().type(JobTitle);
    }

    EnterJobCode(JobCode)
    {
        this.elements.JobCode().clear();
        this.elements.JobCode().type(JobCode);
    }
  
    EnterIndustry(industry)
    {
        this.elements.industry().clear();
        this.elements.industry().type(industry);

    }

    EnterDepartment(department)
    {
        this.elements.department().clear();
        this.elements.department().type(department);
    }

    EnterLocation(location)
    {
        this.elements.location().clear();
        this.elements.location().type('USA');
    }

    ClickAssignBtn()
    {
        this.elements.Assignbtn().click();
    }

    ClickViewAllBtn()
    {
        this.elements.ViewAllbtn().click();
    }

    ClickViewAllJD()
    {
        this.elements.ViewAllJD().click()
    }

    Clickaccordianicon()
    {
        this.elements.accordianicon().click()
    }
    EnterjobTitle(jobname)
    {
        this.elements.jobTitle().type(jobname)
    }
    ClickFilterBtn()
    {
        this.elements.FilterBtn().click()
    }

    ClickViewJD()
    {
        this.elements.ViewJDBtn().click()
    }
 
 }
 
 export default dashboardPage;