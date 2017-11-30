import React, { Component } from 'react';


export default function DeleteItemButton(props) {
  const onSubmit = e => { 
    e.preventDefault()
    e.target.value;
  }
  
  return (
    <form onSubmit={onSubmit}>
      <button className="delete-item-button" onClick={() => props.onClick(props.itemId)}>X</button>
    </form>
  );
}

