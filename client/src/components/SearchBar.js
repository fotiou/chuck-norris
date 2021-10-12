import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function SearchBar(props) {

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
					<Grid item xs={2} justifyContent="center">
						<Box
							component="form"
							sx={{
								"& > :not(style)": { m: 1, width: "100%" },
							}}
							noValidate
							autoComplete="off"
						>
							<InputLabel className={"label"}>
								Key word(s)
							</InputLabel>
						</Box>
					</Grid>
					<Grid item xs={8}>
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
								label="e.g. egg, break, Chuck Norris, dumb"
								fullwidth
								variant="outlined"
								value={props.query}
								onChange={(event) =>
									props.setQuery(event.target.value)
								}
							/>
						</Box>
					</Grid>
					<Grid item xs={2}>
						<Button
							disableElevation
							disabled={(props.query === "")}
							variant="contained"
							className={'submit'}
							size="large"
							onClick={() => props.getQuotes()}
						>
							GO!
						</Button>
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
}
