import React from 'react';
import './PageContent';

import Home from '../Home/Home';
import Bio from '../Bio/Bio';
import Media from '../Media/Media';

const PageContent = ({ tab }) => {
    switch (tab) {
      case 0:
        return (
          <Home />
        )
      case 1:
        return (
          <Bio />
        )
      case 2:
        return (
          <Media />
        )
      default:
        return (
          <Home />
        )
    }
  }

  export default PageContent;