import React from 'react';
import './delete-button.css';

export default function DeleteItemButton(props) {
  const onSubmit = e => { 
    e.preventDefault()
    
  }
  
  return (
    <form onSubmit={onSubmit}>
      <button className="delete-item-button" onClick={() => props.onClick(props.itemId)}>Remove item</button>
    </form>
  );
}

