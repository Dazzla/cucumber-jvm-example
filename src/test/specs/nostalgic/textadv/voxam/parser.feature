Ability: Parsing User Input

  Background:
    Given the game parser

  Scenario: Parse a valid single word command
    When the command "inventory" is parsed
    Then the verb is "inventory"
    And  there is no direct object
    And  the parser response is "Success"

  Scenario: Parse a command with a direct object
    When the command "get spade" is parsed
    Then the verb is "get"
    And  the direct object is "spade"
    And  the parser response is "Success"

  Scenario: Parse a command with an indirect object
    When the command "dig earth with spade" is parsed
    Then the verb is "dig"
    And  the direct object is "earth"
    And  the indirect object is "spade"
    And  the parser response is "Success"