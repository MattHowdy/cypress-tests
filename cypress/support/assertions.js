Cypress.Commands.add('shouldURLBeEqual', (url)=>{
    cy.url()
        .should('eq', Cypress.config().baseUrl + url)
})