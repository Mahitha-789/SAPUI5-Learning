sap.ui.define([
    "../localService/mockserver"
], (mockserver) => {
    "use strict";

    // start the mock server
    mockserver.init();

    // start the component
    sap.ui.require(["sap/ui/core/ComponentSupport"]);
});
