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
  (0, _Themes.registerThemePropertiesLoader)("@ui5/webcomponents", "sap_fiori_3", () => _parametersBundle2.default);
  var _default = {
    packageName: "@ui5/webcomponents",
    fileName: "themes/MessageStrip.css",
    content: ".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block;width:100%}.ui5-message-strip-root{width:100%;height:100%;display:flex;border-radius:var(--sapPopover_BorderCornerRadius);padding:var(--_ui5_message_strip_padding);border-width:var(--_ui5_message_strip_border_width);border-style:solid;box-sizing:border-box;position:relative}.ui5-message-strip-root-hide-icon{padding-inline:var(--_ui5_message_strip_padding_inline_no_icon);padding-block:var(--_ui5_message_strip_padding_block_no_icon)}.ui5-message-strip-root-hide-close-button{padding-inline-end:1rem}.ui5-message-strip-root--info{background-color:var(--sapInformationBackground);border-color:var(--sapMessage_InformationBorderColor);color:var(--sapTextColor)}.ui5-message-strip-root--info .ui5-message-strip-icon{color:var(--sapInformativeElementColor)}.ui5-message-strip-root--positive{background-color:var(--sapSuccessBackground);border-color:var(--sapMessage_SuccessBorderColor)}.ui5-message-strip-root--positive .ui5-message-strip-icon{color:var(--sapPositiveElementColor)}.ui5-message-strip-root--negative{background-color:var(--sapErrorBackground);border-color:var(--sapMessage_ErrorBorderColor)}.ui5-message-strip-root--negative .ui5-message-strip-icon{color:var(--sapNegativeElementColor)}.ui5-message-strip-root--warning{background-color:var(--sapWarningBackground);border-color:var(--sapMessage_WarningBorderColor)}.ui5-message-strip-root--warning .ui5-message-strip-icon{color:var(--sapCriticalElementColor)}.ui5-message-strip-icon-wrapper{position:absolute;top:var(--_ui5_message_strip_icon_top);inset-inline-start:.75rem;box-sizing:border-box}.ui5-message-strip-text{width:100%;color:var(--sapTextColor);line-height:1.2;font-family:\"72override\",var(--sapFontFamily);font-size:var(--sapFontSize)}.ui5-message-strip-close-button{width:2rem;min-width:2rem;height:1.65rem;min-height:1.65rem;position:absolute;top:var(--_ui5_message_strip_close_button_top);inset-inline-end:var(--_ui5_message_strip_close_button_right)}"
  };
  _exports.default = _default;
});