import { renderHook } from "@testing-library/react";
import useInterval from "../index";
var setUp = function (_a) {
    var fn = _a.fn, delay = _a.delay;
    return renderHook(function () { return useInterval(fn, delay); });
};
describe("useInterval", function () {
    jest.useFakeTimers();
    jest.spyOn(globalThis, "clearInterval");
    it("interval should work", function () {
        var callback = jest.fn();
        setUp({ fn: callback, delay: 20 });
        expect(callback).not.toHaveBeenCalled();
        jest.advanceTimersByTime(70);
        expect(callback).toHaveBeenCalledTimes(3);
    });
    it("interval should stop", function () {
        var callback = jest.fn();
        setUp({ fn: callback, delay: undefined });
        jest.advanceTimersByTime(50);
        expect(callback).toHaveBeenCalledTimes(0);
    });
    it("interval should be clear", function () {
        var callback = jest.fn();
        var hook = setUp({ fn: callback, delay: 20 });
        expect(callback).not.toHaveBeenCalled();
        hook.result.current();
        jest.advanceTimersByTime(70);
        expect(callback).toHaveBeenCalledTimes(0);
        expect(clearInterval).toHaveBeenCalledTimes(1);
    });
});
//# sourceMappingURL=index.test.js.map