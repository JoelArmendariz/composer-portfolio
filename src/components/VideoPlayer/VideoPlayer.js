import React, { useEffect } from 'react';
import './VideoPlayer.css';
import ResponsiveEmbed from 'react-responsive-embed';

const VideoPlayer = ({ youTubeId, film }) => {
	const {
		title,
		director,
		description,
	} = film;
	const filmTextDirector = `Directed by ${director}`;
	const filmTextDescription = `Film Description: ${description}`;
	return (
		<div className="video-player-container">
			<ResponsiveEmbed
				className="video-responsive"
				src={`https://www.youtube.com/embed/${youTubeId}`}
				ratio='16:9'
				allowFullScreen
			/>
			<div className="video-description-container">
				<h5 className="video-player-title">{title}</h5>
				<p className="video-player-description">{filmTextDirector}</p>
				<p className="video-player-description">{filmTextDescription}</p>
			</div>
		</div>
	)
}

export default VideoPlayer;
