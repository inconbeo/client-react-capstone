import React, { Component } from 'react';


export default function AddItemButton(props) {
  const onSubmit = e => { 
    e.preventDefault()
    e.target.value;
    //console.log(e.target)
  }
  //console.log(props.itemId);
  return (
    <form onSubmit={onSubmit}>
      <button className="add-item-button" onClick={() => props.onClick(props.itemId)}>Add Item</button>
    </form>
  );
}