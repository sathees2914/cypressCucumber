// describe("loginPage", () => {
//   it("login successful", () => {
//     cy.visit(
//       "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
//     );
//     cy.get(
//       ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
//     ).type("Admin");
//     cy.get(
//       ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
//     ).type("admin123");
//     cy.get(".oxd-button").click();
//   });
// });

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Given("I visit the login page", () => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
});

When("I enter valid credentials", () => {
  cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    "Admin"
  );
  cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    "admin123"
  );
  cy.get(".oxd-button").click();
});

Then("I should be logged in successfully", () => {
  // Assert that we are on the dashboard page after login
  cy.url().should("include", "/dashboard");
  cy.get(".oxd-userdropdown").should("be.visible"); // Check if the user dropdown is visible, indicating successful login
});
