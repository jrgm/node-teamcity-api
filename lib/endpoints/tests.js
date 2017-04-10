"use strict";

var APIEndpoint = require("../api-endpoint")
  , testLocator = require("../locators/test-locator")
  ;

function getTestById() {
  return new APIEndpoint()
    .get()
    // /httpAuth/app/rest/testOccurrences?locator=build:(id:9473),count:10000'
    .uri("testOccurrences?locator=build:({locator}),count:10000")
    .pureJson()
    .locator({name: "locator", validator: testLocator});
}

module.exports = {
    getTestById: getTestById()
};

