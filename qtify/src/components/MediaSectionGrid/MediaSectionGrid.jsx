import { Button, Grid } from "@mui/material";
import React from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./MediaSectionGrid.module.css";

const MediaSectionGrid = ({
	headerText,
	mediaList,
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
					{mediaList.length &&
						mediaList.map((mediaDetail) => {
							const { id } = mediaDetail;
							return (
								<Grid key={id} size={2}>
									<Card mediaDetail={mediaDetail} />
								</Grid>
							);
						})}
				</Grid>
			) : (
				<Carousel mediaList={mediaList} sectionName={sectionName} />
			)}
		</>
	);
};

export default MediaSectionGrid;
