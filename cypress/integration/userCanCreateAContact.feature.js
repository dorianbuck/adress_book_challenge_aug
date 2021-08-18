// cyTest.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("user can create a contact", () => {
  it("test", () => {
    cy.visit("http://localhost:3001");
    cy.get("#add-contact").click();
    cy.get("#name").type("Thomas");
    cy.get("#email").type("thomas@craft.se");
    cy.get("#phone").type("0700 101010");
    cy.get("#company").type("Craft Academy");
    cy.get("#notes").type("Awesome coder");
    cy.get("#twitter").type("@thomasochman");
    cy.get("#submit").click();
  });
});
