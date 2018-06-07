"use strict";
var Field = (function () {
    function Field(isMine, xCoordinate, yCoordinate) {
        this.isMine = isMine;
        this.value = 0;
        this.x = xCoordinate;
        this.y = yCoordinate;
    }
    return Field;
}());
exports.Field = Field;
