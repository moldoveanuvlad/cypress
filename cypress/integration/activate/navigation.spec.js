describe('Navigation test', () => {
    it('Expands navigation menu item', () => {
        cy.login()
        cy.visit('http://dmp-qa-2020.streamhub.io.s3-website-us-east-1.amazonaws.com/home')
        cy.get('.menu-item').contains('Segments').click()
        cy.get('.list-group-item').contains('Segment List').should('be.visible')
    })
})