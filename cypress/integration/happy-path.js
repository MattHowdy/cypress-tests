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
       cy.getByClass('jfUpload-container')
            .contains(enContent.uploadTitle)

       cy.getByClass('jfUpload-container')
            .contains(enContent.maxSize)

       cy.getByClass('jfUpload-button')
            .contains(enContent.browseBtn)

        
        // TODO:
        // upload content

        cy.getPrevBtn(UPLOAD_FILE_PAGE)
        cy.getNextBtn(UPLOAD_FILE_PAGE).click()
    } )

    it('loads signature page, draws, and clicks on next', () => {
       
        cy.get('[data-component=signature]')
            .trigger('mousemove', { x: 150, y: 200 })
            .trigger('mousedown')
            .trigger('mousemove', { x: 101, y: 201 })
            .trigger('mousemove', { x: 101, y: 201 })
            .trigger('mouseup')
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