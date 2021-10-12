import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Context as MetaDataContext } from "../context/metaDataProvider";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

export default function RandomBar(props) {
	const metaData = useContext(MetaDataContext);

	return (
		<React.Fragment>
			<Container
				disableGutters
				className="search-bar"
				maxWidth={false}
				sx={{ flexGrow: 1 }}
			>
				<Grid
					container
					spacing={2}
					alignItems="center"
					justifyContent="center"
				>
					<Grid item xs={5} justifyContent="center">
						<Box
							component="form"
							sx={{
								"& > :not(style)": { m: 1, width: "100%" },
							}}
							noValidate
							autoComplete="off"
						>
							<TextField
								className={'input'}
								label={'Name'}
								variant="outlined"
								value={props.name}
								onChange={(event) =>
									props.setName(event.target.value)
								}
							/>
						</Box>
					</Grid>
					<Grid item xs={5}>
						<FormControl sx={{ m: 1, width: "100%" }}>
							<InputLabel id="demo-multiple-name-label">
								Categories
							</InputLabel>
							<Select
								className={'input'}
								labelId="demo-multiple-name-label"
								id="demo-multiple-name"
								multiple
								value={props.selectedCategories}
								onChange={(event) =>
									props.setSelectedCategories(
										event.target.value
									)
								}
								input={<OutlinedInput label="Name" />}
								MenuProps={MenuProps}
							>
								{metaData.categories.map((category) => (
									<MenuItem key={category} value={category}>
										{category}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={2}>
						<Button
							disableElevation
							disabled={
								props.name === "" ||
								props.selectedCategories.length === 0
							}
							variant="contained"
							className={"submit"}
							size="large"
							onClick={() => props.getRandomQuote()}
						>
							GO!
						</Button>
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
}
