import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ youTubeId, film }) => {
	const {
		title,
		director,
		description,
	} = film;
	const filmTextDirector = `Directed by ${director}`;
	const filmTextDescription = `Film Description: ${description}`;
	return (
		<>
			<iframe className="video-player" title={title}
				src={`https://www.youtube.com/embed/${youTubeId}`}>
			</iframe> 
			<div className="video-description-container">
				<h5 className="video-player-title">{title}</h5>
				<p className="video-player-description">{filmTextDirector}</p>
				<p className="video-player-description">{filmTextDescription}</p>
			</div>
		</>
	)
}

export default VideoPlayer;
