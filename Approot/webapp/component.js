sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel"
], (UIComponent, JSONModel) => {
   "use strict";

   return UIComponent.extend("ui5.walkthrough.Component", {
      metadata: {
         interfaces: ["sap.ui.core.IAsyncContentCreation"],
         manifest: "json"   // 👈 reference manifest.json
      },

      init() {
         // call parent init
         UIComponent.prototype.init.apply(this, arguments);

         // set data model
         const oData = {
            recipient: {
               name: "World"
            }
         };
         const oModel = new JSONModel(oData);
         this.setModel(oModel);
      }
   });
});
