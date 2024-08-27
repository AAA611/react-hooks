export interface Actions {
    setTrue: () => void;
    setFalse: () => void;
    set: (value: boolean) => void;
    toggle: () => void;
}
declare function useBoolean(defaultValue?: boolean): [boolean, Actions];
export default useBoolean;
