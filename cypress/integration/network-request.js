/// <reference types="cypress" />

describe("Network Request", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/network-requests");
  });
  it("Get request", () => {
    cy.intercept({
      method: "GET",
      url: "**/comments/*",
    }).as("getComment");

    cy.get(".network-btn").click();

    cy.wait("@getComment").its("response.statusCode").should("eq", 200);
  });

  it("Post request", () => {
    cy.intercept({
      method: "POST",
      url: "**/comments",
    }).as("postComment");

    cy.get(".network-post").click();

    cy.wait("@postComment").its("response.statusCode").should("eq", 201);
  });
});
