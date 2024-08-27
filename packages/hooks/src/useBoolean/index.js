"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var useToggle_1 = tslib_1.__importDefault(require("../useToggle"));
function useBoolean(defaultValue) {
    if (defaultValue === void 0) { defaultValue = false; }
    var _a = tslib_1.__read((0, useToggle_1.default)(!!defaultValue), 2), state = _a[0], _b = _a[1], toggle = _b.toggle, set = _b.set;
    var actions = (0, react_1.useMemo)(function () {
        var setTrue = function () { return set(true); };
        var setFalse = function () { return set(false); };
        var set = function (value) { return set(!!value); };
        return {
            toggle: toggle,
            set: set,
            setTrue: setTrue,
            setFalse: setFalse,
        };
    }, []);
    return [state, actions];
}
exports.default = useBoolean;
//# sourceMappingURL=index.js.map