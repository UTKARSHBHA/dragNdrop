// components/WebsiteCanvas.js

"use client";

import React, { useState } from "react";
import EditableTextbox from "./EditableTextbox";
import EditableImage from "./EditableImage";
import styles from "../styles/WebsiteCanvas.module.css";

const WebsiteCanvas = () => {
  const [sections, setSections] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const elementType = e.dataTransfer.getData("text/plain");
    const newSections = [...sections, { type: elementType }];
    setSections(newSections);
  };

  const handleDelete = (index) => {
    const newSections = [...sections];
    newSections.splice(index, 1);
    setSections(newSections);
  };

  return (
    <div
      className={styles.canvas}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {sections.map((section, index) => (
        <div key={index}>
          {section.type === "Text" && (
            <EditableTextbox onDelete={() => handleDelete(index)} />
          )}
          {section.type === "Image" && (
            <EditableImage onDelete={() => handleDelete(index)} />
          )}
        </div>
      ))}
    </div>
  );
};

export default WebsiteCanvas;
