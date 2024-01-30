"use client"

import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import styles from '../styles/EditableTextbox.module.css';

const EditableTextbox = ({ id, onDelete }) => {
  const [text, setText] = useState('Your Text Here');
  const [isEditing, setIsEditing] = useState(false);
  const draggableRef = useRef(null);


  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleHeadingClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    onDelete();
  };

  const handleEditComplete = () => {
    setIsEditing(false);
  };

  const handleDocumentClick = (e) => {
    if (draggableRef.current && !draggableRef.current.contains(e.target)) {
      handleEditComplete();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <Draggable nodeRef={draggableRef}>
      <div
        className={styles.textbox}
        ref={draggableRef}
        onClick={handleHeadingClick}
      >
        <h2>{text}</h2>
        {isEditing && (
          <React.Fragment>
            <textarea value={text} onChange={handleTextChange} />
            <button onClick={handleDeleteClick}>Delete</button>
          </React.Fragment>
        )}
      </div>
    </Draggable>
  );
};

export default EditableTextbox;
