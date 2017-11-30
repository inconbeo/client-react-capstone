import React, { Component } from 'react';
import { fetchAddItemSuccess } from '../actions/protected-data';

export default function AddItemButton(props) {
  const onSubmit = e => { 
    e.preventDefault()
    e.target.value;
   
  }
 
  return (
    <form onSubmit={onSubmit}>
      <button className="add-item-button" onClick={() => props.onClick(props.itemId)}>Add Item</button>
    </form>
  );
}