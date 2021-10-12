import React, { useEffect, useState } from "react";
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
					<img src="../quotes.svg" className="quote-image left" />
					<Typography
						variant="h3"
						color="inherit"
						sx={{ flexGrow: 1 }}
					>
						{props.quote}
					</Typography>
					<img src="../quotes.svg" className="quote-image right" />
				</Box>
			</Grid>
		</React.Fragment>
	);
};

export default QuoteViewer;
