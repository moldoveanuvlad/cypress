// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('login', () => {
    cy.visit('http://dmp-qa-2020.streamhub.io.s3-website-us-east-1.amazonaws.com/')
    cy.get('#email')
    .type('vr-tony@streamhub.co.uk', { delay: 50 })
    .should('have.value', 'vr-tony@streamhub.co.uk')
    cy.get('#password')
    .type('streamhub', { delay: 50 })
    cy.get('.btn-color-class').contains('Login').click()
  })

Cypress.Commands.add('autoLogin', () => {
    cy.request('POST', 'https://streamhub.eu.auth0.com/oauth/ro', {
        client_id: "dTE98v7Hb6zucDLMHa0U49MB2YAToiUE",
        connection: "Username-Password-Authentication",
        grant_type: "password",
        password: "streamhub",
        scope: "openid user_id name user_metadata",
        username: "wrong-vr-tony@streamhub.co.uk"
      })
})