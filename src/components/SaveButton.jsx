// components/SaveButton.js
"use client"
import React from 'react';
import styles from '../styles/SaveButton.module.css';

const SaveButton = () => {
  return (
    <button onClick={()=>{console.log("website saved");}} className={styles.saveButton}>
      Save
    </button>
  );
};

export default SaveButton;
