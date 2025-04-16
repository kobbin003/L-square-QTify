import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "@fontsource/poppins/600.css";

function App() {
	return (
		<div className="app-container">
			<Navbar />
			<Routes>
				<Route path="/" element={<Hero />} />
			</Routes>
		</div>
	);
}

export default App;
