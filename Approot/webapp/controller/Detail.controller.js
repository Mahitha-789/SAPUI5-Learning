sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.Detail", {

        onInit: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("detail").attachPatternMatched(this.onObjectMatched, this);
        },

        onObjectMatched: function (oEvent) {
            var sInvoicePath = "/" + decodeURIComponent(oEvent.getParameter("arguments").invoicePath);
            this.getView().bindElement({
                path: sInvoicePath,
                model: "invoice"
            });
        }

    });
});
