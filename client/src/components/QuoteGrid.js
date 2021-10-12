import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import QuoteViewer from "./QuoteViewer";
import DataTable from "react-data-table-component";

const ExpandedComponent = ({ data }) => (
	<React.Fragment>
		<Grid
			container
			direction="column"
			alignItems="center"
			justifyContent="center"
		>
			<Box sx={{ width: "100%", maxWidth: 1000 }}>
				<Box className={"expanded-row"}>
					<QuoteViewer quote={data.value} />
				</Box>
			</Box>
		</Grid>
	</React.Fragment>
);
const columns = [
	{
		name: "ID",
		selector: (row) => row.id,
		sortable: true,
	},
	{
		name: "Categories",
		selector: (row) => row.categories,
		sortable: true,
	},
	{
		name: "Date Created",
		selector: (row) => formatDateTime(row.created_at),
		sortable: true,
	},
];

const formatDateTime = (timestamp) => {
	const dateTime = new Date(timestamp);
	const date = dateTime.getDate();
	const month = dateTime.toLocaleString("default", { month: "short" });
	const time = dateTime.toLocaleString("default", {
		timeStyle: "short",
		hour12: true,
	});
	const year = dateTime.getFullYear();
	return `${month} ${date}, ${year} ${time.toUpperCase()}`;
};

const QuoteGrid = (props) => {
	return (
		<React.Fragment>
			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="center"
			>
				<Box sx={{ width: "100%", maxWidth: 1000 }}>
					<DataTable
						columns={columns}
						data={props.quotes}
						expandableRows
						defaultSortFieldId={3}
						pagination
						expandableRowsComponent={ExpandedComponent}
					/>
				</Box>
			</Grid>
		</React.Fragment>
	);
};

export default QuoteGrid;
