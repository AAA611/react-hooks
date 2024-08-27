import { useCallback, useEffect, useRef } from "react";
var useInterval = function (fn, delay) {
    var timerRef = useRef(null);
    var timerCallback = useCallback(fn, []);
    var clear = useCallback(function () {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
    }, []);
    useEffect(function () {
        if (typeof delay !== "number" || delay < 0)
            return;
        timerRef.current = setInterval(timerCallback, delay);
        return clear;
    }, [delay]);
    return clear;
};
export default useInterval;
//# sourceMappingURL=index.js.map