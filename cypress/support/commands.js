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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

///<reference types="Cypress" />


Cypress.Commands.add("login", ({project}) => {
    const projectConfig = Cypress.env(project); // Retrieve the project-specific config
    if (!projectConfig) {
      throw new Error(`Configuration for project ${project} is not defined in Cypress config.`);
    }
  
    const { url, username, password } = projectConfig;
  
    cy.visit(url);
  
    // Verify that the correct URL is being visited
    //cy.url().should("include", url);
  
    cy.get("#toggle-login-form").click();
    cy.get("#Username").type(username);
    cy.get("#Password").type(password);
  
    // Intercept the reCAPTCHA request and mock a successful response
    cy.intercept("POST", "https://www.google.com/recaptcha/api/siteverify", {
      statusCode: 200,
      body: {
        success: true,
        score: 0.9,
        action: "login",
      },
    }).as("recaptcha");
  
    // Submit the login form
    cy.get("button[value='login']").click();
  
    // Log for debugging or confirmation
    cy.log(`Logged in to ${url} for project ${project}`);
  });
/*
//   import "cypress-file-upload";
  
//   import Login from "../e2e/TaxonomyBuilderE2E/loginPage/LoginPage.js";
  
//   Cypress.Commands.add("loginForTaxonomy", () => {
//     cy.fixture("Login.json").then((login) => {
//       Login.loginWithUIForTaxonomy(login.email, login.password);
//     });
//   });
//   Cypress.Commands.add("loginForTemplate", () => {
//     cy.fixture("Login.json").then((login) => {
//       Login.loginWithUIForTemplate(login.email, login.password);
//     });
//   });
  
This one is commented beacuse its of Taxonomy builder and obviously not needed here .
*/