import React from "react";
import Hero from "../Hero/Hero";
import Section from "../Section/Section";
import styles from "./RootPage.module.css";
const RootPage = () => {
	return (
		<div className={styles.root}>
			<Hero />
			<Section />
		</div>
	);
};

export default RootPage;
