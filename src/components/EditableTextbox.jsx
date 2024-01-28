// components/EditableTextbox/EditableTextbox.js
import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import styles from '../styles/EditableTextbox.module.css';

const EditableTextbox = ({ id, onDelete }) => {
  const [text, setText] = useState('Your Text Here');
  const [isEditing, setIsEditing] = useState(false);
  const draggableRef = useRef(null);

  useEffect(() => {
    const storedText = localStorage.getItem(`text-${id}`);
    if (storedText) {
      setText(storedText);
    }
  }, [id]);

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
    // Check if the click occurred outside the editable area
    if (draggableRef.current && !draggableRef.current.contains(e.target)) {
      handleEditComplete();
    }
  };

  useEffect(() => {
    // Attach the click event listener to the document
    document.addEventListener('click', handleDocumentClick);

    // Cleanup the event listener on component unmount
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
