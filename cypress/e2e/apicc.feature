Feature: Test API endpoint

  Scenario: Verify GET /users API
    Given I make a GET request to "https://jsonplaceholder.typicode.com/users"
    Then the response status should be 200
    And the response body should contain an array
    And each user should have a name
