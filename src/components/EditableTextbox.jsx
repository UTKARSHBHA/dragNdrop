// components/EditableTextbox.js
import React, { useState } from 'react';

const EditableTextbox = ({ onDelete }) => {
  const [text, setText] = useState('Your Text Here');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea value={text} onChange={handleTextChange} />
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default EditableTextbox;
