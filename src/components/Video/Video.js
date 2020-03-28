import React from 'react';
import './Video.css';

const Video = ({ youTubeId, filmTitle, onSelect, film }) => {
	console.log(film);
	return (
		<div onClick={() => onSelect(youTubeId, film)} className="video-container">
			<img alt="" className="video" title={filmTitle}
				src={`http://img.youtube.com/vi/${youTubeId}/0.jpg`}>
			</img> 
		</div>
	)
}

export default Video;
