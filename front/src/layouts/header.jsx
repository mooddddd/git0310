import { HeaderWrap, Nav, Logo, Wrap } from "../components/header";
import { useStore } from "../store";
import { Navigation } from "./navigation";

export const Header = () => {
    const { state } = useStore();

    const category = [
        { path: "/", name: "Home" },
        { path: "/board/list", name: "Board" },

        { path: "/login", name: "Login", isLogin: false },
        { path: "/signup", name: "Signup", isLogin: false },

        { path: "/logout", name: "Logout", isLogin: true },
        // { name: `${state.user}님` },
    ];
    console.log(state);

    return (
        <Wrap>
            <HeaderWrap>
                <Logo>logo</Logo>
                <Nav>
                    <Navigation category={category} isLogin={state.isLogin} />
                </Nav>
            </HeaderWrap>
        </Wrap>
    );
};
