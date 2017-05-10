// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  // API POST Requests
  // Below code handles when a user clicks on submit and the form sends data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // ---------------------------------------------------------------------------

  app.post("/survey", function(req, res) {
    // Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table

      friendData.push(req.body);
      res.json(true);

  });

  // ---------------------------------------------------------------------------

  app.get("/", function(req, res) {
    res.json(friendData);
  });

  // API POST Requests
  // Below code handles when a user clicks on submit and the form sends data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // ---------------------------------------------------------------------------

  // ---------------------------------------------------------------------------


  app.post("/api/clear", function() {
    // Empty out the arrays of data if needed - for testing purpose
    friendData = [];

  });
};
