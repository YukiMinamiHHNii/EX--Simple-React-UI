import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./navbar.css";
import logo from "../img/3ED.gif";
import SimpleMenu from "./SimpleMenu";

export class Navbar extends React.Component {
	render() {
		return (
			<div>
				<AppBar id="navbar" position="fixed">
					<SimpleMenu />
					<Toolbar id="toolbar">
						<img src={logo} />
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default Navbar;
