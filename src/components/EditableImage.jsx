// components/EditableImage.js

"use client";

import React, { useState } from "react";
import styles from "../styles/EditableImage.module.css";

const EditableImage = ({ onDelete }) => {
  const [imageUrl, setImageUrl] = useState("https://via.placeholder.com/150");

  const handleImageChange = (e) => {
    setImageUrl(e.target.value);
  };

  return (
    <div className={styles.image}>
      <input type="text" value={imageUrl} onChange={handleImageChange} />
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default EditableImage;
