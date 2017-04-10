"use strict";

var util = require("util") // eslint-disable-line no-unused-vars
  , APIEndpoint = require("../api-endpoint")
  , buildTypeLocator = require("../locators/build-type-locator")
  , projectLocator = require("../locators/project")
  , vcsRootLocator = require("../locators/vcs-root") // eslint-disable-line no-unused-vars
  ;

function getBuildsByBuildTypeWithCount() {
  return new APIEndpoint()
    .get()
    .uri("builds/?locator=buildType:({locator}),{count},defaultFilter:false")
    .pureJson()
    .locator({name: "locator", validator: buildTypeLocator})
    .locator({name: "count", validator: buildTypeLocator})
    ;
}

function getBuildsByProjectWithCount() {
  return new APIEndpoint()
    .get()
    .uri("builds/?locator={project},{count},defaultFilter:false")
    .pureJson()
    .locator({name: "project", validator: projectLocator})
    .locator({name: "count", validator: buildTypeLocator})
    ;
}

function getBuildById() {
  return new APIEndpoint()
    .get()
    .uri("builds/{locator}")
    .pureJson()
    .locator({name: "locator", validator: buildTypeLocator});
}

function getBuildPropertiesById() {
  return new APIEndpoint()
    .get()
    .uri("builds/{locator}/resulting-properties")
    .pureJson()
    .locator({name: "locator", validator: buildTypeLocator})
}

function startBuild() {
  return new APIEndpoint()
    .post()
    .uri("buildQueue")
    .pureJson()
    .payload(buildNode)
    ;
}

module.exports = {
    getBuildsByBuildTypeWithCount: getBuildsByBuildTypeWithCount(),
    getBuildsByProjectWithCount: getBuildsByProjectWithCount(),
    getBuildById: getBuildById(),
    getBuildPropertiesById: getBuildPropertiesById(),
    startBuild: startBuild()
};

function buildNode(data) {
  return {
    body: data,
    type: "application/xml"
  };
}
