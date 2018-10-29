import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export class Navbar extends React.Component {
	render() {
		return (
			<div>
				<AppBar position="fixed">
					<Toolbar>
						<Typography variant="title" color="inherit">
							React & Material-ui (really simple) sample page
						</Typography>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default Navbar;
