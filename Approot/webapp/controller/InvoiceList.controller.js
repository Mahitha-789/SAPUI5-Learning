sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], (Controller, JSONModel, Filter, FilterOperator) => {
	"use strict";

	return Controller.extend("ui5.walkthrough.controller.InvoiceList", { 
		onInit() {
			// Local view model for things like currency
			const oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},

		// Called when search is triggered
		onFilterInvoices(oEvent) {
			const aFilter = [];
			const sQuery = oEvent.getParameter("query");

			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}

			// filter binding
			const oList = this.byId("invoiceList");
			const oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},

		// Formatter for the "Status" field in InvoiceList.view.xml
		statusText(sStatus) {
			// You can map the status values to readable texts
			const oBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "A":
					return oBundle.getText("invoiceStatusA"); // e.g. "New"
				case "B":
					return oBundle.getText("invoiceStatusB"); // e.g. "In Progress"
				case "C":
					return oBundle.getText("invoiceStatusC"); // e.g. "Done"
				default:
					return sStatus;
			}
		},
		onPress() {
			const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail");
		}

	});
});
