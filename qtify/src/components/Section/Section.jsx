import React from "react";
import NewAlbumSection from "../NewAlbumsSection/NewAlbumSection";
import TopAlbumSection from "../TopAlbumSection/TopAlbumSection";
import styles from "./Section.module.css";

const Section = () => {
	return (
		<div className={styles.section}>
			<NewAlbumSection />
			<TopAlbumSection />
		</div>
	);
};

export default Section;
