import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import { Button, Grid } from "@mui/material";
import axios from "axios";
// const albums = [
// 	{
// 		id: "1",
// 		albumName: "one",
// 		follows: 100,
// 		albumImg: "https://picsum.photos/200",
// 	},
// 	{
// 		id: "2",
// 		albumName: "two",
// 		follows: 100,
// 		albumImg: "https://picsum.photos/200",
// 	},
// ];
const Section = () => {
	// console.log("AlbumGrid:", albums);
	const [topAlbums, setTopAlbums] = useState([]);
	// const []

	useEffect(() => {
		(async function () {
			const url = "https://qtify-backend-labs.crio.do/albums/top";
			const res = await axios.get(url);
			if (res.data) {
				setTopAlbums(res.data);
			}
		})();
	}, []);

	return (
		<div className={styles.section}>
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
		</div>
	);
};

export default Section;
