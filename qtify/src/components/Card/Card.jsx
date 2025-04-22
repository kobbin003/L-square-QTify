import { Chip } from "@mui/material";
import React from "react";
import styles from "./Card.module.css";

const Card = ({ mediaDetail }) => {
	const { title, image } = mediaDetail;
	const isAlbum = Object.hasOwn(mediaDetail, "follows");
	// const isAlbum = "follows" in mediaDetail;
	return (
		<div className={styles.card}>
			<div className={styles["top-section"]}>
				<img src={image} alt="" style={{ width: "100%", height: "85%" }} />
				<div className={styles["chip-section"]}>
					<Chip
						label={
							isAlbum
								? `${mediaDetail.follows} follows`
								: `${mediaDetail.likes} likes`
						}
						variant="filled"
						sx={(theme) => ({
							backgroundColor: theme.palette.black.main,
							color: theme.palette.white.main,
						})}
					/>
				</div>
			</div>
			<div className={styles["bottom-section"]}>{title}</div>
		</div>
	);
};

export default Card;
