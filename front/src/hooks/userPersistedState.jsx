import { useState, useEffect } from "react";

// 상태를 storage에 저장하는 역할?

export const usePsersistedState = (key, initState) => {
    const [state, setState] = useState(() => {
        const storagedState = localStorage.getItem(key);
        return !storagedState ? initState : JSON.parse(storagedState);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    const changeStorage = (change) => {
        setState(change);
    };

    return [state, changeStorage];
};
