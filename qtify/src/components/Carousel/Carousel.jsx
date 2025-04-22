import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./Carousel.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import prevSlide from "../../assets/prevSlide.svg";
import nextSlide from "../../assets/nextSlide.svg";
import Card from "../Card/Card";

const Carousel = ({ mediaList, sectionName }) => {
	return (
		<div className={styles["carousel"]}>
			<Swiper
				modules={[Navigation]}
				navigation={{
					nextEl: `.custom-next-${sectionName}`,
					prevEl: `.custom-prev-${sectionName}`,
				}}
				breakpoints={{
					320: {
						slidesPerView: 1,
					},
					480: {
						spaceBetween: 10,
						slidesPerView: 2,
					},
					768: {
						spaceBetween: 10,
						slidesPerView: 3,
					},
					1024: {
						spaceBetween: 20,
						slidesPerView: 5,
					},
					1280: {
						spaceBetween: 32,
						slidesPerView: 6,
					},
				}}
				className={styles["slide-container"]}
			>
				{mediaList.length &&
					mediaList.map((mediaDetail) => (
						<SwiperSlide className={styles["slide"]}>
							<Card mediaDetail={mediaDetail} />
						</SwiperSlide>
					))}
			</Swiper>
			<button className={`custom-prev custom-prev-${sectionName}`}>
				<img src={prevSlide} alt="prevSlide" />
			</button>
			<button className={`custom-next custom-next-${sectionName}`}>
				<img src={nextSlide} alt="nextSlide" />
			</button>
		</div>
	);
};

export default Carousel;
