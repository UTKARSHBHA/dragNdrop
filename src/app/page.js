
import React from 'react';
import Toolbar from '../components/Toolbar';
import WebsiteCanvas from '../components/WebsiteCanvas';

import style from "../styles/page.module.css"
import SaveButton from '@/components/SaveButton';

const Home = () => {
  return (
    <div className={style.container}>
      <Toolbar />
      <WebsiteCanvas />
      <SaveButton/>
    </div>
  );
};

export default Home;
