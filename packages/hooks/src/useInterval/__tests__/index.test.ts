import { renderHook } from "@testing-library/react";
import useInterval from "../index";

interface ParamsObj {
  fn: (...args: any) => any;
  delay?: number;
}

const setUp = ({ fn, delay }: ParamsObj) =>
  renderHook(() => useInterval(fn, delay));

describe("useInterval", () => {
  jest.useFakeTimers();
  jest.spyOn(globalThis, "clearInterval");

  it("interval should work", () => {
    const callback = jest.fn();
    setUp({ fn: callback, delay: 20 });
    expect(callback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(70);
    expect(callback).toHaveBeenCalledTimes(3);
  });

  it("interval should stop", () => {
    const callback = jest.fn();

    setUp({ fn: callback, delay: undefined });

    jest.advanceTimersByTime(50);
    expect(callback).toHaveBeenCalledTimes(0);
  });

  it("interval should be clear", () => {
    const callback = jest.fn();
    const hook = setUp({ fn: callback, delay: 20 });

    expect(callback).not.toHaveBeenCalled();

    hook.result.current();

    jest.advanceTimersByTime(70);
    expect(callback).toHaveBeenCalledTimes(0);
    expect(clearInterval).toHaveBeenCalledTimes(1);
  });
});
