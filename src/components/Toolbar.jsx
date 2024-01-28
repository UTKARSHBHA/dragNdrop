

"use client"

import React from 'react';
import styles from '../styles/Toolbar.module.css';

const Toolbar = () => {
  return (
    <div className={styles.toolbar}>
      <div draggable="true" onDragStart={(e) => e.dataTransfer.setData('text/plain', 'Text')}>
        Text
      </div>
      <div draggable="true" onDragStart={(e) => e.dataTransfer.setData('text/plain', 'Image')}>
        Image
      </div>
    </div>
  );
};

export default Toolbar;
