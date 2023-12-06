import React, {useState} from "react";
import './MobileNavigation.css'
import Navigation from "./navigation";

export const MobileNavigation = () => {

    // to change burger classes
    const [burgerClass, setBurgerClass] = useState("burger-bar unclicked")
    const [menuClass, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div style={{width: '100%', height: '30px'}}>
            <nav className="nav-mobile">
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burgerClass} ></div>
                    <div className={burgerClass} ></div>
                    <div className={burgerClass} ></div>
                </div>
            </nav>
            <div className={menuClass}>
                <Navigation callback={updateMenu}/>
            </div>
        </div>
    )
}