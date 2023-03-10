import { NavLink } from "react-router-dom";
import { memo } from "react";

export const Navigation = ({ category, isLogin }) => {
    const categoryFilter = (item) => !item.hasOwnProperty("isLogin") || item.isLogin === isLogin;

    const categoryMap = (v) => {
        return (
            <li key={v.path}>
                <NavLink to={v.path}>{v.name}</NavLink>
                {v.subMenu && <Navigation category={v.subMenu} isLogin={isLogin} />}
            </li>
        );
    };

    const navigation = category.filter(categoryFilter).map(categoryMap);

    return <ul>{navigation}</ul>;
};
