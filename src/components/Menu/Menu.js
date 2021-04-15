import React from "react";
import { Link } from "gatsby"
import * as menuStyles from "./Menu.module.css";


const ListLink = props => (
	<li style={{ display: `inline-block`, marginRight: `1rem` }}>
	  <Link to={props.to}>{props.children}</Link>
	</li>
  )


function Menu() {
    return (
		<div className={menuStyles.background}>
			<ul>
				<ListLink to="/">Home</ListLink >
				<ListLink to="/locations">Locations</ListLink >
				<ListLink to="/meters">Meters</ListLink >
				<ListLink to="/readings">Readings</ListLink >
				<ListLink to="/about">About</ListLink >
			</ul>
		</div>
    )
}
export default Menu;