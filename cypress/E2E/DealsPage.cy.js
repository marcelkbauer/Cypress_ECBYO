describe('ECBYO Deals Page', () => {
  it('passes', () => {
    cy.visit('https://ecbyo-staging.herokuapp.com/deals'),
    cy.viewport(1536, 960) // Set viewport to 1536px x 7960px
    cy.get('.logo')
    cy.get('.header-right > [href="/deals"]')
    cy.get('.header-right > [href="/list-your-property"]')
    cy.get('.header-right > [href="/"]')
    cy.get('.background-picture > img')
    cy.get('.header-div > h1')
    cy.get('.header-div > p')
  })
})