import { Button, Grid } from "@mui/material";
import React from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./AlbumSectionGrid.module.css";

const AlbumSectionGrid = ({
	headerText,
	albumList,
	showGrid,
	setShowGrid,
	sectionName,
}) => {
	const handleButtonClick = () => {
		setShowGrid((prev) => !prev);
	};
	return (
		<>
			<div className={styles["section-header"]}>
				<h1>{headerText}</h1>
				<Button
					className={styles["collapse-btn"]}
					variant="text"
					color="primary"
					onClick={handleButtonClick}
				>
					{showGrid ? "Collapse" : "Show All"}
				</Button>
			</div>

			{showGrid ? (
				<Grid
					container
					rowSpacing={4}
					columnSpacing={2}
					sx={{ paddingBottom: "3rem" }}
				>
					{albumList &&
						albumList.map((album) => {
							const { id } = album;
							return (
								<Grid key={id} size={2}>
									<Card album={album} />
								</Grid>
							);
						})}
				</Grid>
			) : (
				<Carousel albumList={albumList} sectionName={sectionName} />
			)}
		</>
	);
};

export default AlbumSectionGrid;
