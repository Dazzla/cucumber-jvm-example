$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("nostalgic/textadv/voxam/parser.feature");
formatter.feature({
  "line": 1,
  "name": "Parsing User Input",
  "description": "",
  "id": "parsing-user-input",
  "keyword": "Ability"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the game parser",
  "keyword": "Given "
});
formatter.match({
  "location": "ParserSteps.the_game_parser()"
});
formatter.result({
  "duration": 59287759,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Parse a valid single word command",
  "description": "",
  "id": "parsing-user-input;parse-a-valid-single-word-command",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "the command \"inventory\" is parsed",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the verb is \"inventory\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "there is no direct object",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the parser response is \"Success\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "inventory",
      "offset": 13
    }
  ],
  "location": "ParserSteps.the_command_is_parsed(String)"
});
formatter.result({
  "duration": 1229024,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inventory",
      "offset": 13
    }
  ],
  "location": "ParserSteps.the_verb_is(String)"
});
formatter.result({
  "duration": 67145,
  "status": "passed"
});
formatter.match({
  "location": "ParserSteps.there_is_no_direct_object()"
});
formatter.result({
  "duration": 32923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 24
    }
  ],
  "location": "ParserSteps.the_parser_response_is(String)"
});
formatter.result({
  "duration": 54070,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the game parser",
  "keyword": "Given "
});
formatter.match({
  "location": "ParserSteps.the_game_parser()"
});
formatter.result({
  "duration": 19305,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Parse a command with a direct object",
  "description": "",
  "id": "parsing-user-input;parse-a-command-with-a-direct-object",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "the command \"get spade\" is parsed",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the verb is \"get\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the direct object is \"spade\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the parser response is \"Success\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "get spade",
      "offset": 13
    }
  ],
  "location": "ParserSteps.the_command_is_parsed(String)"
});
formatter.result({
  "duration": 52180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "get",
      "offset": 13
    }
  ],
  "location": "ParserSteps.the_verb_is(String)"
});
formatter.result({
  "duration": 49194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "spade",
      "offset": 22
    }
  ],
  "location": "ParserSteps.theDirectObjectIs(String)"
});
formatter.result({
  "duration": 37999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 24
    }
  ],
  "location": "ParserSteps.the_parser_response_is(String)"
});
formatter.result({
  "duration": 31252,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the game parser",
  "keyword": "Given "
});
formatter.match({
  "location": "ParserSteps.the_game_parser()"
});
formatter.result({
  "duration": 18531,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Parse a command with an indirect object",
  "description": "",
  "id": "parsing-user-input;parse-a-command-with-an-indirect-object",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "the command \"dig earth with spade\" is parsed",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the verb is \"dig\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "the direct object is \"earth\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the indirect object is \"spade\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the parser response is \"Success\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "dig earth with spade",
      "offset": 13
    }
  ],
  "location": "ParserSteps.the_command_is_parsed(String)"
});
formatter.result({
  "duration": 66818,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dig",
      "offset": 13
    }
  ],
  "location": "ParserSteps.the_verb_is(String)"
});
formatter.result({
  "duration": 46490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "earth",
      "offset": 22
    }
  ],
  "location": "ParserSteps.theDirectObjectIs(String)"
});
formatter.result({
  "duration": 34392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "spade",
      "offset": 24
    }
  ],
  "location": "ParserSteps.theIndirectObjectIs(String)"
});
formatter.result({
  "duration": 46328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 24
    }
  ],
  "location": "ParserSteps.the_parser_response_is(String)"
});
formatter.result({
  "duration": 30923,
  "status": "passed"
});
});