describe('happy path', ()=>{


    it('load main page and click on button', () => {
        cy.visit('')
        cy.shouldURLEq()
        cy.url().should('eq', Cypress.config().baseUrl)
    } )

    it('loads name page, fills out the form, and clicks on next', () => {
       
    } )

    it('loads file upload and clicks on next ', () => {
       
    } )

    it('loads signature page, draws, and clicks on next', () => {
       
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