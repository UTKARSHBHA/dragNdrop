// components/Toolbar.js

"use client"
import React from 'react';

const Toolbar = () => {
  return (
    <div style={{background: "red"}}>
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
