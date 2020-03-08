// packages.js #tutorial-step-2 - Decribes the contents of the package as well as the dependencies.

Package.describe({
  name: "settaz"
});

Package.onUse(function(api) {
  api.use([
    // Here are our dependencies:

    // vulcan core
    "promise",
    "vulcan:core@=1.14.1",

    // vulcan packages
    "vulcan:forms@=1.14.1",
    "vulcan:accounts@=1.14.1",
    "vulcan:ui-bootstrap@=1.14.1"
  ]);

  api.addFiles("lib/stylesheets/style.css");

  // Here is the entry point for client & server:
  api.mainModule("lib/server/main.js", "server");
  api.mainModule("lib/client/main.js", "client");
});
