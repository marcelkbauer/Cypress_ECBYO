describe('ECBYO HomePage', () => {
    it('passes', () => {
      cy.visit('https://ecbyo-staging.herokuapp.com/'),
      cy.viewport(1536, 960) // Set viewport to 1536px x 7960px
      cy.get('.logo')
      cy.get('.header-right > [href="/deals"]')
      cy.get('.header-right > [href="/list-your-property"]')
      cy.get('.header-right > [href="/"]')
      cy.get('.background-picture > img')
      cy.get('.header-div > h1')
      cy.get('.header-div > p')
      //cy.get('#headlessui-combobox-input-\:r0\:') //search text field
  
      /* ==== Generated with Cypress Studio ==== */
      cy.get('#startDate').click();
      cy.get('[aria-label="Choose Tuesday, December 20, 2022 as your check-in date. It’s available."]').click();
      cy.get('[aria-label="Choose Thursday, December 29, 2022 as your check-out date. It’s available."]').click();
      cy.get('#headlessui-popover-button-\\:r2\\: > img').click();
      cy.get(':nth-child(1) > .map-search-input-container > :nth-child(3)').click();
      cy.get(':nth-child(1) > .map-search-input-container > :nth-child(3)').click();
      cy.get(':nth-child(2) > .map-search-input-container > :nth-child(3)').click();
      cy.get('#headlessui-combobox-input-\\:r0\\:').clear('de');
      cy.get('#headlessui-combobox-input-\\:r0\\:').type('destin area'); 
      cy.wait(4000);
      cy.get('#headlessui-combobox-option-\\:r8\\:').click();
      cy.wait(1000);
      //cy.get('.search-right > .primary-btn');
      cy.get('.search-right > .primary-btn').click();
      cy.wait(1000);
      /* ==== End Cypress Studio ==== */
      cy.visit('https://ecbyo-staging.herokuapp.com/')
    })
  })
  