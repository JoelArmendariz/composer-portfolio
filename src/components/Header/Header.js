import React from 'react';
import './Header.css';
import { Tabs, Tab } from '@material-ui/core';

const Header = ({ tab, setTab }) => {
  return (
    <div className="header">
      <div className="title-container">
        <h1 className="title">Joel Armendariz</h1>
      </div>
      <Tabs
        value={tab}
        indicatorColor="primary"
        textColor="primary"
        centered={true}
        onChange={(e, index) => {setTab(index)}}
      >
        <Tab label="Home" />
        <Tab label="Bio" />
        <Tab label="Media" />
      </Tabs>
    </div>
  );
}

export default Header;
