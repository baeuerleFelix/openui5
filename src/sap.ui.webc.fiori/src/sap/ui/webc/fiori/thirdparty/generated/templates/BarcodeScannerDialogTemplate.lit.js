sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"], function (_exports, _LitRenderer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  /* eslint no-unused-vars: 0 */

  const block0 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-dialog", tags, suffix)} stretch class="ui5-barcode-scanner-dialog-root" @ui5-before-open=${(0, _LitRenderer.ifDefined)(context._startReader)} @ui5-after-close=${(0, _LitRenderer.ifDefined)(context._resetReader)}><div class="ui5-barcode-scanner-dialog-video-wrapper"><video class="ui5-barcode-scanner-dialog-video"></video></div><div slot="footer" class="ui5-barcode-scanner-dialog-footer"><${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)} design="Transparent" @click=${context._closeDialog}>${(0, _LitRenderer.ifDefined)(context._cancelButtonText)}</${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)}></div><${(0, _LitRenderer.scopeTag)("ui5-busy-indicator", tags, suffix)} ?active=${context.loading} size="Large" text="${(0, _LitRenderer.ifDefined)(context._busyIndicatorText)}" class="ui5-barcode-scanner-dialog-busy"></${(0, _LitRenderer.scopeTag)("ui5-busy-indicator", tags, suffix)}></${(0, _LitRenderer.scopeTag)("ui5-dialog", tags, suffix)}>` : (0, _LitRenderer.html)`<ui5-dialog stretch class="ui5-barcode-scanner-dialog-root" @ui5-before-open=${(0, _LitRenderer.ifDefined)(context._startReader)} @ui5-after-close=${(0, _LitRenderer.ifDefined)(context._resetReader)}><div class="ui5-barcode-scanner-dialog-video-wrapper"><video class="ui5-barcode-scanner-dialog-video"></video></div><div slot="footer" class="ui5-barcode-scanner-dialog-footer"><ui5-button design="Transparent" @click=${context._closeDialog}>${(0, _LitRenderer.ifDefined)(context._cancelButtonText)}</ui5-button></div><ui5-busy-indicator ?active=${context.loading} size="Large" text="${(0, _LitRenderer.ifDefined)(context._busyIndicatorText)}" class="ui5-barcode-scanner-dialog-busy"></ui5-busy-indicator></ui5-dialog>`;
  var _default = block0;
  _exports.default = _default;
});