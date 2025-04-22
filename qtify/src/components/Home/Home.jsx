import React from "react";
import Hero from "../Hero/Hero";
import Section from "../Section/Section";
import styles from "./Home.module.css";

const Home = () => {
	return (
		<div className={styles.root}>
			<Hero />
			<Section />
		</div>
	);
};

export default Home;
