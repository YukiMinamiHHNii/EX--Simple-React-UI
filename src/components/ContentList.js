import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Content from "./Content";

export class ContentList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contents: [
				{
					image: "https://picsum.photos/500/500/?random",
					title: "Content 1 - Title",
					description:
						"Adaptogen disrupt brooklyn humblebrag iPhone bitters raw denim fixie letterpress. Vice normcore 90's hashtag marfa yr meditation kitsch sustainable poke synth franzen tbh. Brunch glossier godard poutine, normcore chicharrones blue bottle church-key four loko artisan taiyaki wayfarers kitsch readymade. Normcore authentic VHS man bun fingerstache jean shorts ethical stumptown vegan fixie pop-up austin. Distillery wolf craft beer single-origin coffee neutra, pork belly VHS occupy literally scenester irony retro asymmetrical. Letterpress succulents farm-to-table organic, subway tile beard dreamcatcher normcore woke jianbing. Everyday carry tumblr drinking vinegar, whatever affogato blog lomo shabby chic.",
					url: "#"
				},
				{
					image: "https://picsum.photos/500/500/?random",
					title: "Content 2 - Title",
					description:
						"Fashion axe chartreuse pork belly live-edge drinking vinegar woke food truck shoreditch flexitarian iceland. Pop-up hammock cardigan, cold-pressed stumptown distillery pok pok VHS shabby chic narwhal actually sriracha. Live-edge pabst pinterest bicycle rights, shoreditch swag pickled chia. Poke synth sustainable, succulents 8-bit seitan af taiyaki pour-over sriracha brooklyn craft beer bushwick franzen unicorn. Fixie actually portland wayfarers intelligentsia pork belly prism ugh.",
					url: "#"
				},
				{
					image: "https://picsum.photos/500/500/?random",
					title: "Content 3 - Title",
					description:
						"Tofu pickled hoodie pabst, raw denim polaroid normcore bitters direct trade shoreditch. Church-key affogato brunch gochujang before they sold out, lo-fi fashion axe polaroid la croix. Umami next level edison bulb skateboard tousled +1 put a bird on it. Ethical activated charcoal celiac flexitarian pug gluten-free drinking vinegar. Vexillologist prism stumptown, cred occupy pug humblebrag raw denim bespoke plaid knausgaard crucifix. Pabst tofu sustainable disrupt intelligentsia.",
					url: "#"
				},
				{
					image: "https://picsum.photos/500/500/?random",
					title: "Content 4 - Title",
					description:
						"Succulents hot chicken XOXO master cleanse DIY. Wolf poutine irony kitsch, neutra pitchfork chicharrones roof party kogi VHS occupy tofu portland. Pickled typewriter XOXO, readymade enamel pin hashtag quinoa. Green juice austin pork belly ugh PBR&B.",
					url: "#"
				},
				{
					image: "https://picsum.photos/500/500/?random",
					title: "Content 5 - Title",
					description:
						"Hoodie tote bag squid marfa mustache. Forage bicycle rights butcher hella photo booth, brooklyn actually iceland kogi coloring book direct trade trust fund iPhone kinfolk small batch. Ugh heirloom lo-fi intelligentsia. Photo booth kale chips small batch, raclette adaptogen cornhole mustache paleo taxidermy vinyl enamel pin truffaut ugh.",
					url: "#"
				},
				{
					image: "https://picsum.photos/500/500/?random",
					title: "Content 6 - Title",
					description:
						"Kinfolk jianbing wayfarers, biodiesel brunch knausgaard cliche squid microdosing. Heirloom cold-pressed gochujang schlitz celiac letterpress selfies authentic messenger bag sustainable fanny pack food truck semiotics. Ennui hella glossier trust fund tbh, vaporware microdosing next level tousled four loko stumptown poutine organic. Hammock taxidermy chillwave, dreamcatcher trust fund banh mi helvetica photo booth portland fingerstache actually health goth single-origin coffee. Mustache tote bag palo santo humblebrag pork belly. Meh pork belly bitters shaman pug godard mixtape jianbing ugh authentic iPhone freegan everyday carry cold-pressed mustache.",
					url: "#"
				}
			],
			searchString: ""
		};
		this.onSearchInputChange = this.onSearchInputChange.bind(this);
	}
	onSearchInputChange(e) {
		console.log("Searching for: " + e.target.value);
	}
	render() {
		return (
			<div>
				{this.state.contents ? (
					<div>
						<Grid container spacing={32} style={{ padding: 24 }}>
							<TextField
								id="searchInput"
								style={{ marginTop: 62, marginLeft: 24, marginRight: 24 }}
								label="Search contents:"
								placeholder="Enter your search here..."
								margin="normal"
								onChange={this.onSearchInputChange}
								fullWidth
							/>
							{this.state.contents.map(item => (
								<Grid item xs={12} sm={6} lg={4}>
									<Content content={item} />
								</Grid>
							))}
						</Grid>
					</div>
				) : (
					"No contents found"
				)}
			</div>
		);
	}
}

export default ContentList;
