import React, { useEffect, useState } from "react";
import styles from "./TopAlbumSection.module.css";
import axios from "axios";
import { Button, Grid } from "@mui/material";
import Card from "../Card/Card";
const TopAlbumSection = () => {
	const [topAlbums, setTopAlbums] = useState([]);
	useEffect(() => {
		(async function () {
			const topAlbumsUrl = "https://qtify-backend-labs.crio.do/albums/top";
			const topAlbumsRes = await axios.get(topAlbumsUrl);
			if (topAlbumsRes.data) {
				setTopAlbums(topAlbumsRes.data);
			}
		})();
	}, []);
	return (
		<>
			<div className={styles["section-header"]}>
				<h1>Top Albums</h1>
				<Button
					className={styles["collapse-btn"]}
					variant="text"
					color="primary"
				>
					Collapse
				</Button>
			</div>

			<Grid container rowSpacing={4} columnSpacing={2}>
				{topAlbums &&
					topAlbums.map((album) => {
						return (
							<Grid key={album.id} size={2}>
								<Card album={album} />
							</Grid>
						);
					})}
			</Grid>
		</>
	);
};

export default TopAlbumSection;
