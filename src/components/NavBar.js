import React from "react"
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav>
                <div><i className="icon fa fa-solid fa-tasks"></i></div>
                <ul>
                    <li><NavLink
                        to="/">MainPage</NavLink></li>
                    <li ><NavLink
                        to="/tables">Tables</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
export default NavBar