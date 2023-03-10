import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store";

export const Logout = () => {
    const navigate = useNavigate();
    const { dispatch } = useStore();

    useEffect(() => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
    }, []);
    return <></>;
};
