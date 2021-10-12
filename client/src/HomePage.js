import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import SearchSelector from "./components/SearchSelector";
import RandomBar from "./components/RandomBar";
import QuoteViewer from "./components/QuoteViewer";
import api from "./api/api";

const HomePage = (props) => {
	const [name, setName] = useState("");
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [quote, setQuote] = useState(null);

	const getRandomQuote = async () => {
		try {
			const requestUrl = `/random?name=${name}&category=${selectedCategories}`;
			const response = await api.get(requestUrl);
			setQuote(response.data);
		} catch (err) {
			alert(err);
		}
	};

	return (
		<React.Fragment>
			<Header />
			<GlobalStyles
				styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
			/>
			<Container disableGutters maxWidth="lg" component="main">
				<SearchSelector />
				<RandomBar
					name={name}
					setName={setName}
					selectedCategories={selectedCategories}
					setSelectedCategories={setSelectedCategories}
					getRandomQuote={getRandomQuote}
				/>
				{quote && (
					<Box className={"random-quote"}>
						<QuoteViewer
							quote={quote.value}
						/>
					</Box>
				)}
			</Container>
		</React.Fragment>
	);
};

export default HomePage;
