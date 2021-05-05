const enContent = require('../fixtures/lang/en.json')

Cypress.Commands.add('getById', (id, be='be.visible')=>{
    cy.get(`#${id}`)
    .should(be)
})

Cypress.Commands.add('getByClass', (className, be='be.visible')=>{
    cy.get(`.${className}`)
        .should(be)
})

Cypress.Commands.add('getNextBtn', (index=0, be='be.visible')=>{
    cy.get('.jfCard-actions')
        .find('.forNext')
        .eq(index)
        .contains(enContent.nextBtn)
        // .invoke('css', 'display')
        .should(be)
})

Cypress.Commands.add('getPrevBtn', (index=0, be='be.visible')=>{
    cy.get('.jfCard-actions')
        .find('.forPrev')
        .eq(index)
        .contains(enContent.prevBtn)
        .should(be)
})

