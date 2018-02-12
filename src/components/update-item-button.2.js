import React, { Component } from 'react';

export default function UpdateItemButton(props) {
  const onSubmit = e => {
    e.preventDefault();
    e.target.value;
  };
  return (
    <form onSubmit={onSubmit}>
      <button
        className="update-item-button"
        onClick={() => props.onClick(props.itemId)}
      >
        Update Item
      </button>
    </form>
  );
}
