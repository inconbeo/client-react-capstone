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
      <button className="delete-item-button" onClick={(e) => props.onClick(e.target)}>X</button>
    </form>
  );
}

