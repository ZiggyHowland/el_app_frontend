import React from "react";
import * as menuStyles from "./Menu.module.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";


export default function Menu(props) {
    return (		

		<Navbar bg="dark" variant="dark" sticky="top">
			{/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
			<Nav
				className="mr-auto"
				variant="pills"
				
				//activeKey={window.location.pathname}
				// defaultActiveKey="/"				
			>
			
				<Nav.Link eventKey="/" href="/">Home</Nav.Link>
				<Nav.Link eventKey="/locations" href="/locations">Locations</Nav.Link>
				<Nav.Link eventKey="/meters" href="/meters">Meters</Nav.Link>
				<Nav.Link eventKey="/readings" href="/readings" >Readings</Nav.Link>
				<Nav.Link eventKey="/about" href="/about" >About</Nav.Link>
			
			</Nav>
			<Form inline>
				<FormControl type="text" placeholder="Search" className="mr-sm-2" />
				<Button variant="outline-info">Search</Button>
			</Form>
		</Navbar>
    )
}