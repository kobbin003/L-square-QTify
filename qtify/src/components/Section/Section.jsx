import React from "react";
import NewAlbumSection from "../NewAlbumsSection/NewAlbumSection";
import TopAlbumSection from "../TopAlbumSection/TopAlbumSection";
import styles from "./Section.module.css";
import SongSection from "../SongSection/SongSection";

const Section = () => {
	return (
		<div className={styles.section}>
			<TopAlbumSection />
			<NewAlbumSection />
			<SongSection />
		</div>
	);
};

export default Section;
