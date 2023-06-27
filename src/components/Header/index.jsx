
import "./styles.css";
import { useState, useEffect } from "react";

function Header() {

    const [activedMenu, setActivedMenu] = useState(true);

    function handleActivedMenu() {
        setActivedMenu(!activedMenu);
    }

    useEffect(() => {
        const verifyWindowWidth = () => {
            if (window.innerWidth < 600) {
                setActivedMenu(!activedMenu);
            } else {
                setActivedMenu(false);
            }
        };

        verifyWindowWidth();
        window.addEventListener("resize", verifyWindowWidth);
        return () => {
            window.removeEventListener("resize", verifyWindowWidth);
        };
    }, []);



    return (
        <header className="container-header">
            <div className="logo">LOGO</div>

            <input
                type="checkbox"
                id="checkbox-menu"
                onClick={() => handleActivedMenu()}
            />
            <label className="menu" htmlFor="checkbox-menu">
                <span></span>
                <span></span>
                <span></span>
            </label>

            <nav className={activedMenu ? "menu-sandwich" : "nav-header"}>
                <ul className={activedMenu ? "nav-bar menu-nav-bar" : "nav-bar"}>
                    <li><p>Home</p></li>
                    <li><p>About</p></li>
                    <li><p>Projects</p></li>
                    <li><p>Contact</p></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;