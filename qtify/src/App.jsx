import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "@fontsource/poppins/600.css";
import RootPage from "./components/RootPage/RootPage";
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
					<Route path="/" element={<RootPage />} />
					{/* <Route path="/" element={<Hero />} /> */}
				</Routes>
			</div>
		</ThemeProvider>
	);
}

export default App;
