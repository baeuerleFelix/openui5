sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/asset-registries/Themes", "sap/ui/webc/common/thirdparty/theming/generated/themes/sap_fiori_3/parameters-bundle.css", "./sap_fiori_3/parameters-bundle.css"], function (_exports, _Themes, _parametersBundle, _parametersBundle2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _parametersBundle = _interopRequireDefault(_parametersBundle);
  _parametersBundle2 = _interopRequireDefault(_parametersBundle2);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  (0, _Themes.registerThemePropertiesLoader)("@ui5/webcomponents-theming", "sap_fiori_3", () => _parametersBundle.default);
  (0, _Themes.registerThemePropertiesLoader)("@ui5/webcomponents-fiori", "sap_fiori_3", () => _parametersBundle2.default);
  var _default = {
    packageName: "@ui5/webcomponents-fiori",
    fileName: "themes/FlexibleColumnLayout.css",
    content: ".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block;background:var(--_ui5_fcl_solid_bg)}.ui5-fcl-root{height:100%;display:flex;flex-direction:row}.ui5-fcl-column{background:inherit;box-sizing:border-box;will-change:width;overflow-y:auto}.ui5-fcl-column-animation{transition:width .56s cubic-bezier(.1,0,.05,1),visibility .56s ease-in}:host([_visible-columns=\"2\"]) .ui5-fcl-column--start{border-inline-end:var(--_ui5_fcl_column_border)}:host([_visible-columns=\"3\"]) .ui5-fcl-column--start{border-inline-end:var(--_ui5_fcl_column_border)}:host([_visible-columns=\"2\"]) .ui5-fcl-column--middle{border-inline-start:var(--_ui5_fcl_column_border)}:host([_visible-columns=\"3\"]) .ui5-fcl-column--middle{border-inline-start:var(--_ui5_fcl_column_border)}:host([_visible-columns=\"3\"]) .ui5-fcl-column--middle{border-inline-end:var(--_ui5_fcl_column_border)}:host([_visible-columns=\"3\"]) .ui5-fcl-column--end{border-inline-start:var(--_ui5_fcl_column_border)}.ui5-fcl-column--hidden{display:none}.ui5-fcl-arrow-container{display:flex;align-items:center;justify-content:center;width:1rem;background-color:var(--sapShell_Background)}.ui5-fcl-arrow{position:relative;width:1.5rem;height:1.5rem;min-width:1.5rem;will-change:transform;overflow:visible;z-index:1}.ui5-fcl-arrow:before{background-image:var(--_ui5_fcl_decoration_top);background-position-y:-.3125rem;bottom:100%}.ui5-fcl-arrow:after{background-image:var(--_ui5_fcl_decoration_bottom);background-position-y:.3125rem;top:100%}.ui5-fcl-arrow:after,.ui5-fcl-arrow:before{content:\"\";position:absolute;left:0;height:4rem;width:100%;transition:all .1s ease-in;background-repeat:no-repeat;background-size:.0625rem 100%;background-position-x:calc(50% - .03125rem)}.ui5-fcl-arrow:hover:after,.ui5-fcl-arrow:hover:before{height:7rem}"
  };
  _exports.default = _default;
});