import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function SearchSelector(props) {

	const selectedClass = (value) => {
		return window.location.pathname === value ? "selected " : "";
	};

	return (
		<React.Fragment>
			<Container
				disableGutters
				maxWidth={false}
			>
				<Grid
					container
					direction="column"
					alignItems="center"
					justifyContent="center"
				>
					<Tabs>
						<Link
							href="/"
							sx={{
								textDecoration: "none",
								textTransform: "none",
							}}
						>
							<Tab
								value="Random"
								label="Random"
								className={`tab left ${selectedClass("/")}`}
							/>
						</Link>
						<Link
							href="/search"
							sx={{
								textDecoration: "none",
								textTransform: "none",
							}}
						>
							<Tab
								value="Search"
								label="Search"
								className={`tab right ${selectedClass(
									"/search"
								)}`}
							/>
						</Link>
					</Tabs>
				</Grid>
			</Container>
		</React.Fragment>
	);
}
