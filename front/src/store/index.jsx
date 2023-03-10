import { createContext, useContext, useReducer } from "react";

export const Context = createContext();
export const useStore = () => useContext(Context);

export const StoreProvider = ({ children }) => {
    const initialState = { isLogin: false, user: {} };

    const state = { isLogin: false, user: "mood" };

    return <Context.Provider value={state}>{children}</Context.Provider>;
};
