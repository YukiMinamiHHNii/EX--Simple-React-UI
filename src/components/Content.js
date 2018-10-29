import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export class Content extends React.Component {
	render() {
		return (
			<div>
				{this.props.content ? (
					<Card>
						<CardMedia
							style={{ height: 0, paddingTop: "56.25%" }}
							image={this.props.content.image}
							title={this.props.content.title}
						/>
						<CardContent>
							<Typography gutterBottom variant="headline" component="h2">
								{this.props.title}
							</Typography>
							<Typography component="p">
								{this.props.content.description}
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								size="small"
								color="primary"
								href={this.props.content.url}
								target="_blank"
							>
								Go to contents...
							</Button>
						</CardActions>
					</Card>
				) : null}
			</div>
		);
	}
}

export default Content;
