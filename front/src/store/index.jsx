import { createContext, useContext, useReducer } from "react";
import { usePsersistedState } from "../hooks/userPersistedState";
import { rootReducer } from "./reducer";

export const Context = createContext();
export const useStore = () => useContext(Context);

export const StoreProvider = ({ children }) => {
    const initialState = { isLogin: false, user: "twtre" };
    const [state, dispatch] = useReducer(rootReducer, initialState);
    const [persistedState, setPersistedState] = usePsersistedState("state", state);
    const globalState = {
        state: persistedState,
        dispatch: (action) => {
            dispatch(action);
            setPersistedState(rootReducer(persistedState, action));
        },
    };

    return <Context.Provider value={globalState}>{children}</Context.Provider>;
};
