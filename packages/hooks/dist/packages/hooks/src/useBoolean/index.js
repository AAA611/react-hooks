import { __read } from "tslib";
import { useMemo } from "react";
import useToggle from "../useToggle";
function useBoolean(defaultValue) {
    if (defaultValue === void 0) { defaultValue = false; }
    var _a = __read(useToggle(!!defaultValue), 2), state = _a[0], _b = _a[1], toggle = _b.toggle, set = _b.set;
    var actions = useMemo(function () {
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
export default useBoolean;
//# sourceMappingURL=index.js.map