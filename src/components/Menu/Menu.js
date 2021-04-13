import React from "react";
import { NavLink, Link } from "react-router-dom";
import * as menuStyles from "./Menu.module.css";


function Menu() {
    return (
		<nav>
			<Link exact to="/">Home</Link>&nbsp;|&nbsp;
			<Link to="/locations">Locations</Link>&nbsp;|&nbsp;
			<Link to="/meters">Meters</Link>&nbsp;|&nbsp;
			<Link to="/readings">Readings</Link>&nbsp;|&nbsp;
			<Link to="/about">About</Link>
		</nav>
    )
}
export default Menu;