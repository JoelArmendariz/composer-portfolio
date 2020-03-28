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
			}
		}
		this.setVideoId = this.setVideoId.bind(this);
	}

	setVideoId (id, film) {
		this.setState({
			videoId: id,
			currentFilm: film,
		})
	}

	render () {
		const { videoId, currentFilm } = this.state;
		return (
			<div className="media-tab-container">
			<h5 className="media-tab-title">Film Scores</h5>
				<VideoPlayer film={currentFilm} youTubeId={videoId} />
				<div className="media-tab-index">
					{films.map(film => {
						return (
							<Paper
								className="video-card"
								children={
									<div>
										<Video film={film} onSelect={this.setVideoId} key={film.id} youTubeId={film.youTubeId} filmTitle={film.title} />
										<h5 className="film-title">{film.title}</h5>
									</div>
								}
								elevation={3}
							/>
						)
					})}
				</div>
			</div>
		)
	}
}

export default Media;
