import axios from "axios";
import React, { useEffect, useState } from "react";
import MediaSectionGrid from "../MediaSectionGrid/MediaSectionGrid";
import { Tab, Tabs } from "@mui/material";
// import styles from "./SongSection.module.css";

const SongSection = () => {
	const [allSongs, setAllSongs] = useState([]);
	const [allGenres, setAllGenres] = useState([]);
	const [showGrid, setShowGrid] = useState(false);
	const [tabIndex, setTabIndex] = React.useState(0);

	const handleChange = (event, newValue) => {
		// newValue will be the selected tab index.
		setTabIndex(newValue);
	};

	const selectedGenre = allGenres[tabIndex - 1]; // - 1 beause 0 is for "all"
	const selectedGenreSongList =
		tabIndex === 0
			? allSongs
			: allSongs.filter(({ genre }) => genre.key === selectedGenre.key);

	useEffect(() => {
		(async function () {
			const allSongsUrl = "https://qtify-backend-labs.crio.do/songs";
			const allSongsRes = await axios.get(allSongsUrl);
			if (allSongsRes.data) {
				setAllSongs(allSongsRes.data);
			}
			const genresUrl = "https://qtify-backend-labs.crio.do/genres";
			const genresRes = await axios.get(genresUrl);
			if (genresRes.data) {
				setAllGenres(genresRes.data.data);
			}
		})();
	}, []);

	return (
		<>
			<Tabs
				value={tabIndex}
				onChange={handleChange}
				aria-label="basic tabs example"
				textColor="inherit"
				sx={{
					color: (theme) => theme.palette.white.main,
				}}
			>
				<Tab
					label="All"
					{...a11yProps("all")}
					sx={{
						color: (theme) => theme.palette.white.main,
					}}
				/>
				{allGenres.length &&
					allGenres.map(({ key, label }) => (
						<Tab
							key={key}
							label={label}
							{...a11yProps(key)}
							sx={{
								color: (theme) => theme.palette.white.main,
							}}
						/>
					))}
			</Tabs>
			<MediaSectionGrid
				mediaList={selectedGenreSongList}
				headerText="Songs"
				showGrid={showGrid}
				setShowGrid={setShowGrid}
				sectionName="songs"
			/>
		</>
	);
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}
export default SongSection;
