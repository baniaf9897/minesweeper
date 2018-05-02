"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Field = (function () {
    function Field(isMine) {
        this.isMine = isMine;
    }
    return Field;
}());
exports.Field = Field;
var Mine = (function (_super) {
    __extends(Mine, _super);
    function Mine() {
        _super.apply(this, arguments);
    }
    return Mine;
}(Field));
exports.Mine = Mine;
var FreeField = (function (_super) {
    __extends(FreeField, _super);
    function FreeField() {
        _super.apply(this, arguments);
    }
    return FreeField;
}(Field));
exports.FreeField = FreeField;
