import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import QuoteViewer from "./QuoteViewer";

const QuoteGrid = (props) => {
	const [quotes, setQuotes] = useState(props.quotes);

	const toogleQuote = (id) => {
		const list = [...quotes];
		list.forEach((quote) => {
			if (id === quote.id) {
				quote.expanded = !quote.expanded;
			} else {
				quote.expanded = false;
			}
		});
		setQuotes(list);
	};

	function Row(props) {
		const { row } = props;
		const [open, setOpen] = React.useState(false);

		return (
			<React.Fragment>
				<TableRow
					sx={{ "& > *": { borderBottom: "unset" } }}
					onClick={() => toogleQuote(row.id)}
				>
					<TableCell component="th" scope="row">
						{row.id}
					</TableCell>
					<TableCell align="right">{row.categories}</TableCell>
					<TableCell align="right">{row.created_at}</TableCell>
				</TableRow>
				{row.expanded && (
					<Box className={"expanded-row"}>
						<QuoteViewer quote={row.value} />
					</Box>
				)}
			</React.Fragment>
		);
	}

	return (
		<React.Fragment>
			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="center"
				className={"table-container"}
			>
				<Box sx={{ width: "100%", maxWidth: 1000 }}>
					<TableContainer component={Paper}>
						<Table aria-label="collapsible table">
							<TableHead>
								<TableRow>
									<TableCell>ID</TableCell>
									<TableCell align="right">
										Category
									</TableCell>
									<TableCell align="right">
										Date Created
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{quotes.map((row) => (
									<Row key={row.id} row={row} />
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			</Grid>
		</React.Fragment>
	);
};

export default QuoteGrid;
