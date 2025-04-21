import axios from "axios";
import React, { useEffect, useState } from "react";
import AlbumSectionGrid from "../AlbumSectionGrid/AlbumSectionGrid";

const TopAlbumSection = () => {
	const [topAlbums, setTopAlbums] = useState([]);
	const [showGrid, setShowGrid] = useState(false);

	useEffect(() => {
		(async function () {
			const topAlbumsUrl = "https://qtify-backend-labs.crio.do/albums/top";
			const topAlbumsRes = await axios.get(topAlbumsUrl);
			if (topAlbumsRes.data) {
				setTopAlbums(topAlbumsRes.data);
			}
		})();
	}, []);

	return (
		<AlbumSectionGrid
			albumList={topAlbums}
			headerText="Top Albums"
			showGrid={showGrid}
			setShowGrid={setShowGrid}
			sectionName="topAlbums"
		/>
	);
};

export default TopAlbumSection;
