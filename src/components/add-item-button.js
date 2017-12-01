import React, { Component } from 'react';
import { fetchAddItemSuccess } from '../actions/protected-data';
import './add-item-button.css';
export default function AddItemButton(props) {
  const onSubmit = e => { 
    e.preventDefault()
    e.target.value;
   
  }
 
  return (
    <form onSubmit={onSubmit}>
      <button className="add-item-button" onClick={props.onClick}>Add Item</button>
    </form>
  );
}