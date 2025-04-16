Feature: Conduit Login Functionality

Scenario: Login and Logout with Valid Credentials
    Given I am on the Conduit login page
    When I login with valid credentials
    And I click the settings button
    And I click the logout button
    Then I route back to the login page
  