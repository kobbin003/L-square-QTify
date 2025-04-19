import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./NewAlbumsSection.module.css";
import { Button, Grid } from "@mui/material";
import Card from "../Card/Card";
const NewAlbumsSection = () => {
	const [newAlbums, setNewAlbums] = useState([]);

	useEffect(() => {
		(async function () {
			const newAlbumsUrl = "https://qtify-backend-labs.crio.do/albums/new";
			const newAlbumsRes = await axios.get(newAlbumsUrl);
			if (newAlbumsRes.data) {
				setNewAlbums(newAlbumsRes.data);
			}
		})();
	}, []);
	return (
		<>
			<div className={styles["section-header"]}>
				<h1>New Albums</h1>
				<Button
					className={styles["collapse-btn"]}
					variant="text"
					color="primary"
				>
					Collapse
				</Button>
			</div>

			<Grid container rowSpacing={4} columnSpacing={2}>
				{newAlbums &&
					newAlbums.map((album) => {
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

export default NewAlbumsSection;
