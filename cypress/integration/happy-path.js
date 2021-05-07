const { NAME_FORM_PAGE, UPLOAD_FILE_PAGE } = require('../fixtures/constants')

describe('happy path', ()=>{
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
       
        cy.getById('signature_pad_7')
            .trigger('pointerdown', {
                x: 250, 
                y: 100,
                isPrimary: true,
            })
            .trigger('pointermove', { x: 280, y: 120 })
            .trigger('pointerup', { x: 260, y: 130 })
        
    } )

    it('loads date page, includes date, and clicks on next', () => {
       
    } )

    it('loads security question page, selects a question, and includes an answer', () => {
       
    } )

    it('loads security question page, selects a question, and includes an answer', () => {
       
    } )

    it('loads thank you page', () => {
       
    } )

    

})