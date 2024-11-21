import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { expect } from "chai";

Given("I make a GET request to {string}", (url) => {
  cy.request(url).as("apiResponse");
});

Then("the response status should be {int}", (statusCode) => {
  cy.get("@apiResponse").its("status").should("eq", statusCode);
});

Then("the response body should contain an array", () => {
  cy.get("@apiResponse").its("body").should("be.an", "array");
});

Then("each user should have a name", () => {
  cy.get("@apiResponse")
    .its("body")
    .each((user) => {
      expect(user).to.have.property("name");
    });
});
