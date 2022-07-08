import React, { useRef, useState } from 'react';
import useOutsideClick from '../../hooks/useClickOtside';
import css from "./Header.module.css"
import Menu from './Menu/Menu';
import { NavLink } from "react-router-dom";


let Header = () => {

    let [openMenu, setMenu] = useState(false);

    const activeMenu = () => {
        setMenu(!openMenu);
    }

    const deactiveMenu = () => {
        setMenu(false);
    }
    const [scroll, setScroll] = useState(false);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const ref = useRef();
    useOutsideClick(ref, deactiveMenu);
    return <header className={scroll < 230 ? "" : css.header}>

        <div className={css.logo}>

            <div className={css.title}>
                <NavLink to={"/"}></NavLink>
            </div>
            <div ref={ref}>
                <div onClick={activeMenu} className={!openMenu ? css.button : css.close_button} >
                </div>
            </div>
        </div>
        <div className={css.menu}>
            <div className='menu'><Menu openMenu={openMenu} scroll={scroll} /></div>

        </div>

    </header>
}

export default Header;