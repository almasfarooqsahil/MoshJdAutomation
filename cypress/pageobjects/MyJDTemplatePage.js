class MyJDTemplatePage{

    elements = { 

        // Login Locators
        UserEmail : () => cy.get('#email'),
        UserPassword : () => cy.get('#password'),
        Sendbutton : () => cy.xpath('//button[contains(@class, "btn-primary") and contains(@class, "btn-block")]'),

        JDManagementMenu : () => cy.xpath('//span[contains(text(),"JD Management")]').should('be.visible'),
        MyJDTemplateMenu : () => cy.xpath('//span[contains(text(),"My JD Templates")]').should('be.visible'),

        // ADD NEW TEMPLATE
        AddNewTemplateBtn : () => cy.xpath('//span[contains(text(),"Add New Template")]').should('be.visible'),
        TemplateName : () => cy.get('#template_name').should('be.visible'),
        AddTemplateButton : () => cy.xpath('//button[contains(text(),"Add Template")]'),

        // VIEW JD TEMPLATE
        ActionIcon : () => cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > ul:nth-child(1) > li:nth-child(1)').should('be.visible'),
        ViewButton : () => cy.xpath('(//a[@href="javscript:;" and @data-toggle="modal" and @data-target="#viewtemplatemodal"])[1]').should('be.visible'),

        // EDIT JD TEMPLATE
        EditButton : () => cy.xpath('(//span[normalize-space()="Edit"])[1]'),
        UpdateButton : () => cy.xpath('//button[contains(text(),"Update Template")]'),


        // CREATE JOB
        CreateJobButton : () => cy.xpath('(//span[normalize-space()="Create Job"])[1]'),
        JobTitle : () => cy.get('#job_title'),
        JobCode : () => cy.get('#code'),
        industry : () => cy.get('#industry'),
        department : () => cy.get('#department'),
        location : () => cy.get('#location'),
        CreateButton : () => cy.get("#job_temp"),


        // CLONE TEMPLATE
        CloneButton : () => cy.xpath('(//span[normalize-space()="Clone"])[1]'),
        CloneOK : () => cy.xpath('(//button[@type="submit" and contains(@class, "btn") and contains(@class, "btn-lg") and contains(@class, "btn-danger") and contains(@class, "mr-4")])[1]'),


        // DELETE TEMPLATE
        DeleteButton : () => cy.xpath('(//span[normalize-space()="Delete"])[1]'),
        DeleteOK : () => cy.xpath('(//button[contains(text(),"Delete")])[1]'),

        
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


       //CLICK ON SIDE MENU
       ClickJDManagementMenu()
       {
            this.elements.JDManagementMenu().click()
       }
       ClickMyJDTemplateMenu()
       {
            this.elements.MyJDTemplateMenu().click()
       }

       // ADD NEW TEMPLATE
       ClickAddNewTemplateBtn()
       {
            this.elements.AddNewTemplateBtn().click()
       }

       EnterTemplateName(TemplateName)
       {
            this.elements.TemplateName().type(TemplateName)
       }

       ClickAddTemplateButton()
       {
            this.elements.AddTemplateButton().click()
       }

       // VIEW JD TEMPLATE
       ClickActionIcon()
       {
            this.elements.ActionIcon().click()
       }

       ClickViewButton()
       {
            this.elements.ViewButton().click()
       }

       // EDIT JD TEMPLATE
       ClickEditButton()
       {
            this.elements.EditButton().click()
       }

       ClickUpdateButton()
       {
           this.elements.UpdateButton().click()
       }

       // CREATE JOB 
       ClickCreateJobButton()
       {
           this.elements.CreateJobButton().click()
       }
       EnterJobTitle(JobTitle)
       {
           this.elements.JobTitle().type(JobTitle,{ force: true });
       }
   
       EnterJobCode(JobCode)
       {
           this.elements.JobCode().type(JobCode,{ force: true });
       }
     
       EnterIndustry(industry)
       {
           this.elements.industry().type(industry,{ force: true });
   
       }
   
       EnterDepartment(department)
       {
           this.elements.department().type(department,{ force: true });
       }
   
       EnterLocation(location)
       {
           this.elements.location().type(location,{ force: true });
       }
       ClickCreateButton()
       {
          this.elements.CreateButton().click({ force: true })
       }



       //CLONE JD TEMPLATE
       ClickCloneButton()
       {
           this.elements.CloneButton().click()
       }
       ClickCloneOK()
       {
           this.elements.CloneOK().click()
       }


       // DELETE JD TEMPLATE
       ClickDeleteButton()
       {
           this.elements.DeleteButton().click()
       }
       ClickDeleteOK()
       {
           this.elements.DeleteOK().click()
       }
 
 }
 
 export default MyJDTemplatePage;