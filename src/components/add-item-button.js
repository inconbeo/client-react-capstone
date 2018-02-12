import React from 'react';
import './add-item-button.css';

export default function AddItemButton(props) {
  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <button className="add-item-button" onClick={props.onClick}>
        Add To Wishlist
      </button>
    </form>
  );
}
