import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "@fontsource/poppins/600.css";
import Home from "./components/Home/Home";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: { main: "#34c94b" },
		black: { main: "#121212" },
		white: { main: "#ffffff" },
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="app-container">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</ThemeProvider>
	);
}

export default App;
