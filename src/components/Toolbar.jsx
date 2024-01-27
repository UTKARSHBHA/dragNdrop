// components/Toolbar.js

"use client"

import React from 'react';
import styles from '../styles/Toolbar.module.css';

const Toolbar = () => {
  return (
    <div className={styles.toolbar}>
      <button draggable="true" onDragStart={(e) => e.dataTransfer.setData('text/plain', 'Text')}>
        Text
      </button>
      <button draggable="true" onDragStart={(e) => e.dataTransfer.setData('text/plain', 'Image')}>
        Image
      </button>
    </div>
  );
};

export default Toolbar;
