import React from "react";
import TopAlbumSection from "../TopAlbumSection/TopAlbumSection";
import styles from "./Section.module.css";
import NewAlbumsSection from "../NewAlbumsSection/NewAlbumsSection";
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
	return (
		<div className={styles.section}>
			<TopAlbumSection />
			<NewAlbumsSection />
		</div>
	);
};

export default Section;
