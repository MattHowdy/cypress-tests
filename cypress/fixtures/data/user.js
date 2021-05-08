

const user = {
    firstName : cy.faker.name.firstName(),
    lastName : cy.faker.name.lastName(),
    date : cy.faker.date.past().toLocaleString('en', { year: 'numeric', month: 'numeric', day: 'numeric' }),
    fullName : cy.faker.name.firstName() + cy.faker.name.lastName()
}

export default { user }