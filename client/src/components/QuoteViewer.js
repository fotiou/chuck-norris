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
				<img src="../quotes.svg" className="quote-image left"/>
				<Box sx={{ width: "100%", maxWidth: 604 }} className={"quote"}>
					<Typography
						variant="h3"
						color="inherit"
						sx={{ flexGrow: 1 }}
					>
						{props.quote}
					</Typography>
				</Box>
				<img src="../quotes.svg"  className="quote-image right"/>
			</Grid>
		</React.Fragment>
	);
};

export default QuoteViewer;
