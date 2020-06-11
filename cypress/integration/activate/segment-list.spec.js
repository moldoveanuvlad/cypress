describe('Navigation test', () => {
    it('Expands navigation menu item', () => {
        cy.login()
        cy.visit('http://dmp-qa-2020.streamhub.io.s3-website-us-east-1.amazonaws.com/home')
        cy.get('.menu-item').contains('Segments').click()
        cy.get('.menu-item').contains('Segments').click()
        cy.get('.list-group-item').contains('Segment List').should('be.visible')
        cy.get('.list-group-item').contains('Segment List').click()
    })

    it('Segment list contextual menu is visible', () => {
        cy.login()
        cy.visit('http://dmp-qa-2020.streamhub.io.s3-website-us-east-1.amazonaws.com/home')
        cy.get('.menu-item').contains('Segments').click()
        cy.get('.menu-item').contains('Segments').click()
        cy.get('.list-group-item').contains('Segment List').should('be.visible')
        cy.get('.list-group-item').contains('Segment List').click()
        cy.url().should('eq', 'http://dmp-qa-2020.streamhub.io.s3-website-us-east-1.amazonaws.com/segments') 
        cy.get('.list-configure').first().click()
    })
})