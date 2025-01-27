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
    fileName: "themes/NotificationListGroupItem.css",
    content: ".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block;width:100%;min-height:var(--_ui5_list_item_base_height);background:var(--ui5-listitem-background-color);cursor:pointer}:host([has-border]){border-bottom:var(--ui5-listitem-border-bottom)}:host([focused]) .ui5-nli-focusable{outline:none}:host([focused]) .ui5-nli-focusable:after{content:\"\";border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}:host([busy]){opacity:.6;pointer-events:none}:host([busy]) .ui5-nli-busy{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.ui5-nli-action{flex-shrink:0;margin-inline-end:.5rem}.ui5-nli-overflow-btn{margin-inline-end:.5rem}.ui5-prio-icon{min-width:1rem;min-height:1rem;padding-inline-end:.625rem}.ui5-prio-icon--message-error{color:var(--sapNegativeElementColor)}.ui5-prio-icon--message-warning{color:var(--sapCriticalElementColor)}.ui5-prio-icon--message-success{color:var(--sapPositiveElementColor)}:host{--_ui5-notification_item-border-raius:0px}:host(:not([collapsed])) .ui5-nli-group-toggle-btn{transform:var(--_ui5_li_notification_group_toggle_btn_rotation)}:host([collapsed]) .ui5-nli-group-items{display:none}:host([read]) .ui5-nli-group-title-text{font-weight:400}.ui5-nli-group-root{display:flex;flex-direction:column;position:relative;width:100%;box-sizing:border-box}.ui5-nli-group-header{background:var(--sapList_GroupHeaderBackground);display:flex;align-items:center;padding-block:.75rem .25rem;padding-inline:.75rem .5rem;width:100%;border-bottom:.0625rem solid var(--sapList_GroupHeaderBorderColor);box-sizing:border-box;cursor:default}.ui5-nli-group-toggle-btn{margin-inline-end:.75rem;cursor:pointer}.ui5-nli-group-title-text{color:var(--sapGroup_TitleTextColor);font-family:\"72override\",var(--sapFontFamily);font-size:var(--sapFontHeader6Size);font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui5-nli-group-divider{flex:1}.ui5-nli-group-counter{margin-inline-start:.25rem;margin-inline-end:1rem;color:var(--sapList_TableGroupHeaderTextColor);font-size:var(--sapFontHeader6Size);font-family:\"72override\",var(--sapFontHeaderFamily)}:host([ui5-li-notification-group]){-webkit-tap-highlight-color:transparent}"
  };
  _exports.default = _default;
});