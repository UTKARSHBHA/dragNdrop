// pages/index.js
import React from 'react';
import Toolbar from '../components/Toolbar';
import WebsiteCanvas from '../components/WebsiteCanvas';

import style from "../styles/page.module.css"

const Home = () => {
  return (
    <div className={style.container}>
      <Toolbar />
      <WebsiteCanvas />
    </div>
  );
};

export default Home;
