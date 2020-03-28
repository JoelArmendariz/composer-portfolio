import React from 'react';
import './Bio.css';

import BioText from '../../data/BioText';

import headshot from '../../assets/JoelHeadshotFull.jpg'

const Bio = () => {
    return (
        <div className="bio-tab-container">
             <img className="headshot-img" src={headshot} alt="headshot" />
             <div className="bio-tab-bio">
                <p className="bio-tab-paragraph">{BioText.p1}</p>
                <p className="bio-tab-paragraph">{BioText.p2}</p>
                <p className="bio-tab-paragraph">{BioText.p3}</p>
             </div>
        </div>
    )
}

export default Bio;
