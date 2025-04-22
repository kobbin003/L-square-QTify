import axios from "axios";
import React, { useEffect, useState } from "react";
import MediaSectionGrid from "../MediaSectionGrid/MediaSectionGrid";

const NewAlbumSection = () => {
	const [newAlbums, setNewAlbums] = useState([]);
	const [showGrid, setShowGrid] = useState(false);

	useEffect(() => {
		(async function () {
			const newAlbumsUrl = "https://qtify-backend-labs.crio.do/albums/new";
			const newAlbumsRes = await axios.get(newAlbumsUrl);
			if (newAlbumsRes.data) {
				setNewAlbums(newAlbumsRes.data);
			}
		})();
	}, []);

	return (
		<MediaSectionGrid
			mediaList={newAlbums}
			headerText="New Albums"
			showGrid={showGrid}
			setShowGrid={setShowGrid}
			sectionName="newAlbums"
		/>
	);
};

export default NewAlbumSection;
