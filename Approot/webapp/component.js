sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("ui5.walkthrough.Component", {

        metadata: {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
        },

        init: function () {
            // call parent init
            UIComponent.prototype.init.apply(this, arguments);

            // default data model
            var oData = {
                recipient: { name: "World" }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            // invoice model
            var oInvoiceData = {
                Invoices: [
                    { ProductName: "Laptop", Quantity: 2, ExtendedPrice: 1200, ShipperName: "FedEx", Status: "A" },
                    { ProductName: "Phone", Quantity: 5, ExtendedPrice: 2500, ShipperName: "DHL", Status: "B" },
                    { ProductName: "Tablet", Quantity: 3, ExtendedPrice: 900, ShipperName: "UPS", Status: "C" }
                ]
            };
            var oInvoiceModel = new JSONModel(oInvoiceData);
            this.setModel(oInvoiceModel, "invoice");

            // initialize router
            this.getRouter().initialize();
        }
    });
});
