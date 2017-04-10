"use strict";

var testsEndpoints = require("../endpoints/tests")
  ;

var Tests = function(request) {
  this._request = request;
};
module.exports = Tests;

Tests.prototype.get = function (locator) {
  return  this._request.execute(testsEndpoints.getTestById, {locator: locator});
};
