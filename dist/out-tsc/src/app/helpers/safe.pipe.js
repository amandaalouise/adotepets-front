import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let SafePipe = class SafePipe {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html':
                return this._sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this._sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this._sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this._sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this._sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error(`Unable to bypass security for invalid type: ${type}`);
        }
    }
};
SafePipe = tslib_1.__decorate([
    Pipe({
        name: 'safe'
    })
], SafePipe);
export { SafePipe };
//# sourceMappingURL=safe.pipe.js.map