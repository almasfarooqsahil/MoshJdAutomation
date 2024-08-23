class MyJDCatalogPage{

    elements = { 

        // Login Locators
        UserEmail : () => cy.get('#email'),
        UserPassword : () => cy.get('#password'),
        Sendbutton : () => cy.xpath('//button[contains(@class, "btn-primary") and contains(@class, "btn-block")]'),

        JDManagementMenu : () => cy.xpath('//span[contains(text(),"JD Management")]').should('be.visible'),
        MyJDCatalogMenu : () => cy.xpath('//span[contains(text(),"My JD Catalog")]').should('be.visible'),
        AddNewJobBtn : () => cy.xpath('//span[normalize-space()="Add New Job"]'),
        JobTitle : () => cy.get('#job_title'),
        JobCode : () => cy.get('#code'),
        industry : () => cy.get('#industry'),
        department : () => cy.get('#department'),
        location : () => cy.get('#location'),
        Assignbtn : () => cy.xpath('(//button[contains(text(),"Assign")])[1]'),

        // ADVANCED SEARCG
        AccordianIcon : () => cy.xpath('//span[@class="accordion-icon"]'),
        FilterBtn : () => cy.xpath('//button[normalize-space()="Filter"]'),

        // EXPORT JD 
        ExportJDinPDF : () => cy.xpath('(//div[@class="custom-control custom-control-sm custom-checkbox notext"])[1]'),
        DropDownIcon : () => cy.xpath('//a[@class="dropdown-toggle btn btn-white btn-dim btn-outline-light"]'),
        PdfOption : () => cy.xpath('//div[@class="nk-block-head nk-block-head-sm"]//li//li[3]//a[1]//span[1]'),
        ExcelOption : () => cy.xpath('//div[@class="nk-block-head nk-block-head-sm"]//li//li[3]//a[1]//span[1]'),
        WordOption : () => cy.xpath('//div[@class="nk-block-head nk-block-head-sm"]//li//li[3]//a[1]//span[1]'),

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

    ClickJDManagementMenu()
    {
        this.elements.JDManagementMenu().click();
    }

    ClickMyJDCatalogMenu()
    {
        this.elements.MyJDCatalogMenu().click();
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

    ClickAccordian()
    {
        this.elements.AccordianIcon().click();
    }

    ClickFilterbtn()
    {
        this.elements.FilterBtn().click();
    }

    ClickExportJDPDF()
    {
        this.elements.ExportJDinPDF().click();
    }

    ClickdropdownIcon()
    {
        this.elements.DropDownIcon().click();
    }

    ClickPdfOption()
    {
        this.elements.PdfOption().click()
    }

    ClickExcelOption()
    {
        this.elements.ExcelOption().click()
    }

    ClickWordOption()
    {
        this.elements.WordOption().click()
    }

    ClickCompareJobsBtn()
    {
        this.elements.CompareJobsBtn().click()
    }

 
 }
 
 export default MyJDCatalogPage;