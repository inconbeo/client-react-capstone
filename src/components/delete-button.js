import React, { Component } from 'react';


export default function DeleteItemButton(props) {
  const onSubmit = e => { 
    e.preventDefault()
    e.target.value;
    //console.log(e.target)
  }
  //console.log(props.itemId);
  return (
    <form onSubmit={onSubmit}>
      <button className="delete-item-button" onClick={() => props.onClick(props.itemId)}>X</button>
    </form>
  );
}