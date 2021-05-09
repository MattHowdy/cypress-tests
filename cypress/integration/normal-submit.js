const { DATE_SELECTOR_PAGE, NAME_FORM_PAGE, UPLOAD_FILE_PAGE, SIGNATURE_PAGE, SELECT_QUESTION_PAGE } = require('../fixtures/constants')

describe('normal submit', ()=>{
    const enContent = require('../fixtures/lang/en.json')
    const { user} = require('../fixtures/data/user')
    
    it('loads main page and click on button', () => {
        cy.visit('/')
        cy.shouldURLBeEqual('/')

        cy.getById('header_welcomePage')
            .contains(enContent.mainPageTitle)

        cy.getById('jfCard-welcome-start')
            .click()
    } )


    it('loads name page, fills out the form, and clicks on next', () => {
        const firstName = user.firstName
        const lastName = user.lastName

        cy.getByClass('jfQuestion-label')
            .contains(enContent.name)

        cy.getById('label_3')
        
        cy.getById('first_3')
                .type(firstName)

        cy.getById('last_3')
                .type(lastName)

        cy.getPrevBtn(NAME_FORM_PAGE, 'not.visible')

        cy.getNextBtn(NAME_FORM_PAGE)
            .click()
    } )


    it('loads file upload and clicks on next ', () => {
        const fileName = 'test.png'

       cy.getByClass('jfUpload-container')
            .contains(enContent.uploadTitle)

       cy.getByClass('jfUpload-container')
            .contains(enContent.maxSize)

       cy.getByClass('jfUpload-button')
            .contains(enContent.browseBtn)
            .click()

        cy.get('#input_9').attachFile(`images/${fileName}`);

        cy.getByClass('qq-upload-list')
            .children()
            .its('length')
            .should('be.eq', 1)

        cy.get(`[actual-filename="${fileName}"]`)
            .should('be.visible')

        cy.getPrevBtn(UPLOAD_FILE_PAGE)
        cy.getNextBtn(UPLOAD_FILE_PAGE).click()
    } )


    it('loads signature page, draws, and clicks on next', () => {
        cy.getByClass('jfQuestion-label')
            .contains(enContent.signature)

        cy.getById('input_7', 'be.hidden').should('not.have.attr', 'value')

        cy.getByClass('jSignature')
            .click(80, 75)
            .click(170, 75)
            .click(80, 165)
            .click(100, 185)
            .click(125, 190)
            .click(150, 185)
            .click(170, 165)

        cy.getById('input_7', 'be.hidden').should('have.attr', 'value')

        cy.getPrevBtn(SIGNATURE_PAGE)
        cy.getNextBtn(SIGNATURE_PAGE).click()
    } )

    it('loads date page, includes date, and clicks on next', () => {
        cy.getByClass('jfQuestion-label')
            .contains(enContent.date)

        cy.getById('calendar-container-10', 'be.not.visible')
        cy.getByClass('jfField-svgWrapper')
            .click()

        cy.getById('calendar-container-10')
            .find('.selected')
            .first()
            .click()
    
        cy.getPrevBtn(DATE_SELECTOR_PAGE)
        cy.getNextBtn(DATE_SELECTOR_PAGE).click()
    } )

    it('loads security question page, selects a question, and includes an answer', () => {
        cy.getByClass('jfQuestion-label')
            .contains(enContent.securityQuestion)

        cy.selectOptionByIndex('q11_securityQuestion[field_1]', 1)
        cy.getById('input_11_field_2')
            .type(user.fullName)

        cy.getPrevBtn(SELECT_QUESTION_PAGE)
        cy.getSubmitBtn(SELECT_QUESTION_PAGE)
            .click()
    } )


    it('loads thank you page', () => {
        cy.url().should('eq', 'https://submit.jotformeu.com/submit/210137027408345/')
        cy.getByClass('thankyouMode')
            .contains(enContent.thankYou)
    } )

    

})