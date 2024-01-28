"use client"

// components/EditableImage/EditableImage.js
import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import styles from '../styles/EditableImage.module.css';

const EditableImage = ({ id, onDelete }) => {
  const [imageUrl, setImageUrl] = useState('https://via.placeholder.com/150');
  const [isEditing, setIsEditing] = useState(false);
  const draggableRef = useRef(null);

  useEffect(() => {
    const storedImageUrl = localStorage.getItem(`image-${id}`);
    if (storedImageUrl) {
      setImageUrl(storedImageUrl);
    }
  }, [id]);

  const handleImageChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleImageClick = () => {
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
        className={styles.image}
        ref={draggableRef}
        onClick={handleImageClick}
      >
        <img src={imageUrl} alt="Image" />
        {isEditing && (
          <React.Fragment>
            <input type="text" value={imageUrl} onChange={handleImageChange} />
            <button onClick={handleDeleteClick}>Delete</button>
          </React.Fragment>
        )}
      </div>
    </Draggable>
  );
};

export default EditableImage;
