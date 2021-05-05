

const user = {
    firstName : cy.faker.name.firstName(),
    lastName : cy.faker.name.lastName(),
    date : cy.faker.date.between('1992-01-01', '1992-12-31')

}

export default { user }