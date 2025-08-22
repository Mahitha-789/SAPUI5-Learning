sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, JSONModel, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.InvoiceList", {

        onInit: function () {},

        onPress: function (oEvent) {
            var oItem = oEvent.getSource();
            var oRouter = this.getOwnerComponent().getRouter();
            var sPath = oItem.getBindingContext("invoice").getPath().substring(1); // remove leading "/"
            oRouter.navTo("detail", { invoicePath: encodeURIComponent(sPath) });
        }

    });
});
