import React from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const Header = () => {
	return (
		<React.Fragment>
			<Container disableGutters maxWidth={false} className={"header"}>
				<Grid
					container
					direction="column"
					alignItems="center"
					justifyContent="center"
				>
					<Avatar
						className={"avatar"}
						src={"../logo.svg"}
						sx={{
							height: 326,
							width: 326,
						}}
					/>
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default Header;
