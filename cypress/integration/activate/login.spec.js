describe('Login test', () => {
    it('Logins to the home page', () => {
      cy.visit('http://dmp-qa-2020.streamhub.io.s3-website-us-east-1.amazonaws.com/')
      cy.get('#email')
      .type('vr-tony@streamhub.co.uk', { delay: 50 })
      .should('have.value', 'vr-tony@streamhub.co.uk')
      cy.get('#password')
      .type('streamhub', { delay: 50 })
      cy.get('.btn-color-class').contains('Login').click()
      cy.url().should('eq', 'http://dmp-qa-2020.streamhub.io.s3-website-us-east-1.amazonaws.com/home') // => true
    })

    it('Logins to the home page through a command', () => {
      cy.login()
      cy.url().should('eq', 'http://dmp-qa-2020.streamhub.io.s3-website-us-east-1.amazonaws.com/home') // => true

    })

    it('redirects to the login page through a wrong post request', () => {
    //  cy.autoLogin()
      cy.visit('http://dmp-qa-2020.streamhub.io.s3-website-us-east-1.amazonaws.com/home', {failOnStatusCode: false})
      cy.get('.card-title').should('have.length', 2)
    })
  })
