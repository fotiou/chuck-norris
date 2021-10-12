import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const QuoteViewer = (props) => {
	return (
		<React.Fragment>
			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="center"
			>
				<Box className={"quote"}>
					<img
						src="../quotes.svg"
						className="quote-image left"
						alt="quotes icon"
					/>
					<Typography
						variant="h3"
						color="inherit"
						sx={{ flexGrow: 1 }}
					>
						{props.quote}
					</Typography>
					<img
						src="../quotes.svg"
						className="quote-image right"
						alt="quotes icon"
					/>
				</Box>
			</Grid>
		</React.Fragment>
	);
};

export default QuoteViewer;
