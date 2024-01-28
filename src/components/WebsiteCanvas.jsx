"use client"

// components/WebsiteCanvas/WebsiteCanvas.js
import React, { useState } from 'react';
import EditableTextbox from '../components/EditableTextbox';
import EditableImage from '../components/EditableImage';
import styles from '../styles/WebsiteCanvas.module.css';

const WebsiteCanvas = () => {
  const [sections, setSections] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const elementType = e.dataTransfer.getData('text/plain');
    const newSections = [...sections, { type: elementType, id: Date.now() }];
    setSections(newSections);
  };

  const handleDelete = (id) => {
    const newSections = sections.filter((section) => section.id !== id);
    setSections(newSections);
  };

  return (
    <div className={styles.canvas} onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
      {sections.map((section) => (
        <div key={section.id} className={styles.section}>
          {section.type === 'Text' && (
            <EditableTextbox
              id={section.id}
              onDelete={() => handleDelete(section.id)}
            />
          )}
          {section.type === 'Image' && (
            <EditableImage
              id={section.id}
              onDelete={() => handleDelete(section.id)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default WebsiteCanvas;
