import React from 'react';
import './Video.css';

const Video = ({ youTubeId, filmTitle, onSelect, film }) => {
	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		onSelect(youTubeId, film);
	}
	return (
		<div onClick={handleClick} className="video-container">
			<img alt="" className="video" title={filmTitle}
				src={`http://img.youtube.com/vi/${youTubeId}/0.jpg`}>
			</img> 
		</div>
	)
}

export default Video;
