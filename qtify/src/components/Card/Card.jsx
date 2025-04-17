import { Chip } from "@mui/material";
import React from "react";
import styles from "./Card.module.css";

// const Card = () => {
const Card = ({ album }) => {
	const { title, follows, image } = album;
	console.log("card-album:", album);
	return (
		<div className={styles.card}>
			<div className={styles["top-section"]}>
				<img src={image} alt="" style={{ width: "100%", height: "85%" }} />
				<div className={styles["chip-section"]}>
					<Chip
						label={`${follows} follows`}
						variant="filled"
						sx={(theme) => ({
							backgroundColor: theme.palette.black.main,
							color: theme.palette.white.main,
							// position: "relative",
							// left: "10px",
							// width: "fit-content",
						})}
					/>
				</div>
			</div>
			<div className={styles["bottom-section"]}>{title}</div>
		</div>
	);
};

export default Card;
