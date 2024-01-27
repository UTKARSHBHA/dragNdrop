// components/EditableTextbox.js

"use client";

import React, { useState } from "react";
import styles from "../styles/EditableTextbox.module.css";

const EditableTextbox = ({ onDelete }) => {
  const [text, setText] = useState("Your Text Here");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={styles.textbox}>
      <textarea value={text} onChange={handleTextChange} />
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default EditableTextbox;
