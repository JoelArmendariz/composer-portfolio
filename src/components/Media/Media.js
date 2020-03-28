import React from 'react';
import './Media.css';
import { Paper } from '@material-ui/core';

import films from '../../data/YouTube';
import Video from '../Video/Video';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

class Media extends React.Component {
	constructor() {
		super()
		this.state = {
			videoId: '0LOqE6q9Cas',
			currentFilm: {
				title: films[0].title,
				director: films[0].director,
				description: films[0].description
			},
			isLoading: false
		}
		this.setVideoId = this.setVideoId.bind(this);
		this.setIsLoading = this.setIsLoading.bind(this);
	}

	setVideoId (id, film) {
		this.setState({
			videoId: id,
			currentFilm: film,
		})
	}

	setIsLoading (bool) {
		this.setState({
			isLoading: bool
		})
	}

	render () {
		const { videoId, currentFilm, isLoading } = this.state;
		return (
			<div className="media-tab-container">
				<h5 className="media-tab-title">Film Scores</h5>
				<VideoPlayer setIsLoading={this.setIsLoading} isLoading={isLoading} film={currentFilm} youTubeId={videoId} />
				<div className="media-tab-index">
					{films.map(film => {
						return film.youTubeId !== videoId ? (
							<Paper
								className="video-card"
								children={
									<div>
										<Video setIsLoading={this.setIsLoading} film={film} onSelect={this.setVideoId} key={film.id} youTubeId={film.youTubeId} filmTitle={film.title} />
										<h5 className="film-title">{film.title}</h5>
									</div>
								}
								elevation={3}
							/>
						) : null;
					})}
				</div>
			</div>
		)
	}
}

export default Media;
