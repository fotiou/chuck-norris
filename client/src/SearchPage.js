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
import SearchBar from "./components/SearchBar";
import QuoteGrid from "./components/QuoteGrid";
import api from "./api/api";

const SearchPage = (props) => {
	const [query, setQuery] = useState("");
	const [quotes, setQuotes] = useState([]);
	
	const getQuotes = async () => {
		try {
			const requestUrl = `/search?query=${query}`;
			const response = await api.get(requestUrl);
			setQuotes(response.data);
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
			<Container
				disableGutters
				maxWidth="lg"
				component="main"
			>
				<SearchSelector />
				<SearchBar
					query={query}
					setQuery={setQuery}
					getQuotes={getQuotes}
				/>
				{(quotes.length > 0) && <QuoteGrid quotes={quotes} />}
			</Container>
		</React.Fragment>
	);
};

export default SearchPage;
