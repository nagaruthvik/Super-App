import React, { useState } from 'react';

function Notepad() {
  const [note, setNote] = useState('');

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  return (
    <div>
      <h1>Simple Notepad</h1>
      <div 
        contentEditable 
        suppressContentEditableWarning 
        value={note} 
        onChange={handleNoteChange} 
        style={{ 
          border: '1px solid #ccc', 
          padding: '10px', 
          minHeight: '150px' 
        }} 
      />
    </div>
  );
}

export default Notepad;