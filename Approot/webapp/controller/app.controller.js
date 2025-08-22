sap.ui.define([
	"sap/ui/core/mvc/Controller"
], (Controller) => {
	"use strict";

	return Controller.extend("ui5.walkthrough.controller.App", {

		onInit() {
			// Apply content density class to root view
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		}
	});
});

