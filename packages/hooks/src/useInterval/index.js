"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useInterval = function (fn, delay) {
    var timerRef = (0, react_1.useRef)(null);
    var timerCallback = (0, react_1.useCallback)(fn, []);
    var clear = (0, react_1.useCallback)(function () {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
    }, []);
    (0, react_1.useEffect)(function () {
        if (typeof delay !== "number" || delay < 0)
            return;
        timerRef.current = setInterval(timerCallback, delay);
        return clear;
    }, [delay]);
    return clear;
};
exports.default = useInterval;
//# sourceMappingURL=index.js.map