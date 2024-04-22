import React, { useState } from "react";
import Logo from "../header/Logo";
import Menu from "../header/Menu";
import Sns from "../header/Sns";

const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggle = () => {
        setIsMenuActive(!isMenuActive);
    };
    return (
        <header id="header" role="banner" className={isMenuActive}>
            <Logo toggle={toggle} />
            <Menu />
            <Sns />
        </header>
    );
};

export default Header;
