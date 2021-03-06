import s from './NavBar.module.css'
import {Link} from 'react-router-dom'
import {PathRoutesType} from "../MyRoutes/MyRoutes";
import React from "react";
import {TotalAmount} from "./TotalAmount";


export const NavBar = React.memo(() => {

    return (
        <nav className={s.navbar}>
            <Link to={PathRoutesType.Home}>
                <h2>OnlineShop</h2>
            </Link>
            <Link to={PathRoutesType.Cart}>
                <div className={s.navBag}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fill="currentColor"
                        className={s.bagIcon}
                        viewBox="0 0 16 16">
                        <path
                            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                    </svg>
                    <span className={s.bagQuantity}>
                    <TotalAmount/>
                </span>
                </div>
            </Link>
        </nav>
    )
})