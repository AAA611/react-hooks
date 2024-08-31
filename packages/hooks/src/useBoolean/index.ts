import { useMemo } from "react";
import useToggle from "../useToggle";

export interface Actions {
  setTrue: () => void;
  setFalse: () => void;
  set: (value: boolean) => void;
  toggle: () => void;
}

function useBoolean(defaultValue = false): [boolean, Actions] {
  const [state, { toggle }] = useToggle(!!defaultValue);

  const actions: Actions = useMemo(() => {
    const setTrue = () => set(true);
    const setFalse = () => set(false);
    const set = (value) => set(!!value);

    return {
      toggle,
      set,
      setTrue,
      setFalse,
    };
  }, []);

  return [state, actions];
}

export default useBoolean;
