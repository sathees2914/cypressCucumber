Feature: Login functionality

  Scenario: Login is successful with valid credentials
    Given I visit the login page
    When I enter valid credentials
    Then I should be logged in successfully
