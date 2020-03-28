import React, { useEffect } from 'react';
import './VideoPlayer.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import ResponsiveEmbed from 'react-responsive-embed';
import Loader from 'react-loader-spinner'

const VideoPlayer = ({ youTubeId, film, setIsLoading, isLoading }) => {
	const {
		title,
		director,
		description,
	} = film;
	useEffect(() => {
		setIsLoading(false);
	}, [isLoading, setIsLoading])
	const filmTextDirector = `Directed by ${director}`;
	const filmTextDescription = `Film Description: ${description}`;
	return (
		<div className="video-player-container">
			{isLoading ? 
				<Loader 
					type="Oval"
					color="#171717"
					height={100}
					width={100}
				/> : 
				<ResponsiveEmbed
					className="video-responsive"
					src={`https://www.youtube.com/embed/${youTubeId}`}
					ratio='16:9'
					allowFullScreen
				/>}
			<div className="video-description-container">
				<h5 className="video-player-title">{title}</h5>
				<p className="video-player-description">{filmTextDirector}</p>
				<p className="video-player-description">{filmTextDescription}</p>
			</div>
		</div>
	)
}

export default VideoPlayer;
