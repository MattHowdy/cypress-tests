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
        .should(be)
})

Cypress.Commands.add('getPrevBtn', (index=0, be='be.visible')=>{
    cy.get('.jfCard-actions')
        .find('.forPrev')
        .eq(index)
        .contains(enContent.prevBtn)
        .should(be)
})

Cypress.Commands.add('getSubmitBtn', (index=0, be='be.visible')=>{
    cy.get('.jfCard-actions')
        .find('.forSubmit')
        .eq(index)
        .contains(enContent.submitBtn)
        .should(be)
})


Cypress.Commands.add('selectOptionByIndex', (selectName, index = 0) => {
    cy.get(`select[name="${selectName}"]`)
        .find('option')
        .eq(index)
        .then(element => cy.get(`select[name="${selectName}"]`).select(element.val(), { force: true }))
})