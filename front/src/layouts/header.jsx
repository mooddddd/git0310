import { HeaderWrap, Nav, Logo, Wrap } from "../components/header";
import { NavLink } from "react-router-dom";

export const Header = () => {
    const category = [
        {
            path: "/",
            name: "Home",
        },
        {
            path: "/board/list",
            name: "Board",
        },
        {
            path: "/login",
            name: "Login",
        },
        {
            path: "/signup",
            name: "Signup",
        },
        {
            path: "/logout",
            name: "Logout",
        },
    ];

    return (
        <Wrap>
            <HeaderWrap>
                <Logo>logo</Logo>
                <Nav>
                    <ul>
                        <li>
                            <NavLink to="/">HOME</NavLink>
                        </li>
                        <li>BOARD</li>
                        <li>
                            <NavLink to="/login">LOGIN</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signup">SIGNUP</NavLink>
                        </li>
                        <li>LOGOUT</li>
                    </ul>
                </Nav>
            </HeaderWrap>
        </Wrap>
    );
};
