// Dependencies
// =============================================================
var path = require('path');

module.exports = function(app) {
  // *********************************************************************************
  // htmlRoutes.js - this file offers a set of routes for sending users to the various html pages
  // *********************************************************************************

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found default to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
